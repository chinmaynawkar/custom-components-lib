import { Theme } from '@emotion/react';
import { TabClasses } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import palette from '../palette';
import typography from '../typography';

const styleOverrides: Partial<
  OverridesStyleRules<keyof TabClasses, 'MuiTab', Omit<Theme, 'components'>>
> = {
  root: {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: typography.subtitle2.fontSize,
    marginRight: palette.spacing,
    color: palette.secondary[500],
    '&.Mui-selected': {
      color: palette.secondary[900],
    },
    '&.Mui-focusVisible': {
      backgroundColor: palette.secondary[400],
    },
  },
};
const MuiTab = {
  styleOverrides,
};

export default MuiTab;
