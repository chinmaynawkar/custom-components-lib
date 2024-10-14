import palette from '../palette';

export const MuiOutlinedInput = {
  styleOverrides: {
    notchedOutline: {
      borderRadius: '12px',
      border: '1px solid #1010101F',
    },
  },
};

export const MuiInput = {
  styleOverrides: {
    root: {
      borderRadius: 10,
      border: '1px solid #E0E0E0',
      paddingInline: 15,
      paddingBlock: 4.5,
      '&:hover': {
        border: '1px solid',
      },
      '&.Mui-focused': {
        border: '1px solid',
        borderColor: palette.primary.main,
      },
      '&:before': {
        display: 'none',
      },
      '&:after': {
        display: 'none',
      },
      '&.MuiInputBase-formControl': {
        border: 'none',
        '&:before': {
          display: 'block',
        },
        '&:after': {
          display: 'block',
        },
      },
    },
  },
};
