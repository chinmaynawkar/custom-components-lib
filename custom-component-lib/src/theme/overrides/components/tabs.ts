import palette from '../palette';

const MuiTabs = {
  styleOverrides: {
    root: {
      backgroundColor: palette.secondary[100],
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      span: {
        height: '100%',
        width: '100%',
        backgroundColor: '#828BF2',
      },
    },
  },
};

export default MuiTabs;
