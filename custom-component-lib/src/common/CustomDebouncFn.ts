type DebouncingOptions = {
    delay: number;
    rateLimit: number;
    interval?: number;
    log?: boolean; // optional logging for debugging purposes
  };
  
  /**
   * Creates a debounced and rate-limited version of the provided function.
   * @param fn - The function to debounce and rate limit.
   * @param options - Options for debouncing and rate limiting.
   * @param options.delay - The debounce delay in milliseconds.
   * @param options.rateLimit - The maximum number of allowed calls in the interval.
   * @param options.interval - The time window for rate limiting in milliseconds (optional).
   * @param options.log - Enable logging for debugging purposes (optional).
   * @returns A debounced and rate-limited version of the function.
   */
  
  export default function CustomDebounceFn<
    T extends (...args: unknown[]) => unknown,
  >(fn: T, options: DebouncingOptions): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let callsCount = 0;
    let startTime = Date.now();
  
    return (...args: Parameters<T>): void => {
      const currentTime = Date.now();
  
      // Reset calls count and start time if interval has passed
      if (options.interval && currentTime - startTime >= options.interval) {
        if (options.log) {
          console.log('Interval reset: resetting calls count and start time.');
        }
        callsCount = 0;
        startTime = currentTime;
      }
  
      // Check if the rate limit has been reached
      if (callsCount >= options.rateLimit) {
        if (options.log) {
          console.log('Rate limit reached: function call ignored.');
        }
        return;
      }
  
      // Clear existing timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      // Set new timeout to debounce the function call
      timeoutId = setTimeout(() => {
        try {
          fn(...args);
          callsCount += 1;
          if (options.log) {
            console.log(`Function executed. Call count: ${callsCount}`);
          }
        } catch (error) {
          console.error('Error executing debounced function:', error);
        }
      }, options.delay);
    };
  }
  