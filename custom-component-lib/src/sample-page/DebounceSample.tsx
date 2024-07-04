import React, { useState } from 'react';
import { TextField,Typography, Container } from '@mui/material';
import CustomDebounceFn from '../common/CustomDebouncFn';


const DebouncedComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Function to be debounced
  const updateOutput = (value: string) => {
    setOutputValue(value);
  };

  // Debounced version of updateOutput function
  const debouncedUpdateOutput = CustomDebounceFn((value: unknown) => updateOutput(value as string), {
    delay: 300,
    rateLimit: 5,
    interval: 2000,
    log: true,
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Debounced Input Component
      </Typography>
      <TextField
        label="Type something..."
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event);
          debouncedUpdateOutput(event.target.value);
        }}
      />
      <Typography variant="h6" gutterBottom>
        Debounced Output:
      </Typography>
      <Typography variant="body1">{outputValue}</Typography>
    </Container>
  );
};

export default DebouncedComponent;
