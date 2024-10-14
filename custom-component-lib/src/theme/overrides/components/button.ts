import { Theme } from '@emotion/react';
import { ButtonClasses } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

const styleOverrides: Partial<
  OverridesStyleRules<
    keyof ButtonClasses,
    'MuiButton',
    Omit<Theme, 'components'>
  >
> = {
  root: {
    textTransform: 'none',
    fontWeight: 400,
    borderRadius: '100px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  sizeSmall: {
    fontSize: '12px',
    height: '30px',
  },
  sizeLarge: {
    fontSize: '20px',
  },
  sizeMedium: {
    fontSize: '17px',
  },
};
const MuiButton = {
  styleOverrides,
};

export default MuiButton;
