import { Palette, Theme } from '@mui/material';

// override the default palette
interface ExtendedPalette extends Palette {
  dev: {
    debugBanner: string;
  };
  sideBarColors: {
    backgroundColor: string;
    highlightColor: string;
    textColor: string;
  };
}

export interface ExtendedTheme extends Theme {
  palette: ExtendedPalette;
}

const purpleColors = {
  50: '#d7d3fc',  // lightest
  100: '#b9b3f9',
  200: '#9c92f5',
  300: '#7e72f2',
  400: '#6151ee',
  500: '#6c5ce7',  // base color
  600: '#5843c7',
  700: '#4532a7',
  800: '#311f87',
  900: '#1d0e67',  // darkest
};

const greyColors = {
  50: '#f9f9f9',
  100: '#f2f2f2',
  200: '#e9e9e9',
  300: '#d9d9d9',
  400: '#b5b5b5',
  500: '#959595',
  600: '#6d6d6d',
  700: '#5a5a5a',
  800: '#3b3b3b',
  900: '#1b1b1b',
};

function hexToRgba(hex1: string, alpha: number): string {
  // Remove the hash at the start if it's there
  const hex = hex1.replace(/^#/, '');

  // Parse r, g, b values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const error = '#F44336';
const warning = '#F8CE3A';
const success = purpleColors[500];
const info = '#2196F3';

const palette = {
  primary: {
    main: purpleColors[500],
    contrastText: '#ffffff',
    ...purpleColors,
  },
  secondary: {
    main: greyColors[100],
    ...greyColors,
  },
  background: {
    default: '#eeeeee',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  dev: {
    debugBanner: '#ff000055',
  },
  sideBarColors: {
    backgroundColor: 'white',
    highlightColor: '#d4f3c4',
    textColor: '#262626',
  },
  success: {
    main: success,
    light: hexToRgba(success, 0.15),
  },
  warning: {
    main: warning,
    light: hexToRgba(warning, 0.15),
  },
  error: {
    main: error,
    light: hexToRgba(error, 0.15),
  },
  info: {
    main: info,
    light: hexToRgba(info, 0.15),
  },
  spacing: 8,
};

export default palette;
