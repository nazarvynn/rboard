import { Theme, ThemeOptions } from '@mui/material/styles/createTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const overrides = (theme: Theme): ThemeOptions => ({
  components: {
    //   MuiTab: {
    //     styleOverrides: {
    //       root: {
    //         fontWeight: 'bold',
    //         fontSize: '1rem',
    //         letterSpacing: 0,
    //       },
    //     },
    //   },
    //   MuiButton: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: 0,
    //         textTransform: 'none',
    //         fontWeight: 400,
    //         color: theme.palette.grey[900],
    //         float: 'left',
    //         paddingLeft: theme.spacing(3),
    //         paddingRight: theme.spacing(3),
    //       },
    //     },
    //   },
    //   MuiDialog: {
    //     defaultProps: {
    //       [theme.breakpoints.down('xs')]: {
    //         overflow: 'scroll',
    //       },
    //     },
    //   },
    //   MuiDialogTitle: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.palette.grey[900],
    //         fontWeight: 700,
    //         textAlign: 'center',
    //       },
    //     },
    //   },
    //   MuiDialogContentText: {
    //     styleOverrides: {
    //       root: {
    //         lineHeight: '1.5',
    //       },
    //     },
    //   },
    //   MuiDrawer: {
    //     styleOverrides: {
    //       paper: {
    //         boxShadow: theme.shadows[10],
    //       },
    //     },
    //   },
    //   MuiAccordion: {
    //     styleOverrides: {
    //       root: {
    //         '&:before': {
    //           display: 'none',
    //         },
    //       },
    //     },
    //   },
    //   MuiAccordionSummary: {
    //     styleOverrides: {
    //       root: {
    //         '&.Mui-expanded': {
    //           minHeight: 0,
    //         },
    //       },
    //     },
    //   },
    //   MuiAccordionDetails: {
    //     styleOverrides: {
    //       root: {
    //         padding: theme.spacing(0),
    //       },
    //     },
    //   },
    //   MuiDialogActions: {
    //     styleOverrides: {
    //       root: {
    //         display: 'flex',
    //         justifyContent: 'center',
    //       },
    //     },
    //   },
    //   MuiCircularProgress: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.palette.primary.main,
    //         margin: `0 auto`,
    //         display: 'block',
    //         alignSelf: 'center',
    //         justifySelf: 'center',
    //       },
    //     },
    //   },
    //   MuiAutocomplete: {
    //     styleOverrides: {
    //       listbox: {
    //         backgroundColor: `${theme.palette.grey[200]} !important`,
    //       },
    //     },
    //   },
    //   MuiFilledInput: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.palette.grey[900],
    //         border: '1px solid',
    //         borderRadius: '0px!important',
    //         borderColor: theme.palette.grey[400],
    //         backgroundColor: theme.palette.grey[200],
    //         '&:hover': {
    //           backgroundColor: `${theme.palette.grey[400]} !important`,
    //         },
    //         '&:active': {
    //           backgroundColor: `${theme.palette.grey[400]} !important`,
    //         },
    //         '&:focus': {
    //           backgroundColor: `${theme.palette.grey[400]} !important`,
    //         },
    //         '&.Mui-focused': {
    //           backgroundColor: theme.palette.grey[200],
    //         },
    //       },
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.palette.grey[900],
    //         border: '1px solid!important',
    //         borderRadius: '0px!important',
    //         borderColor: `${theme.palette.grey[400]} !important`,
    //         backgroundColor: theme.palette.grey[200],
    //         '&:hover': {
    //           border: '1px solid',
    //           borderColor: theme.palette.grey[400],
    //         },
    //       },
    //     },
    //   },
    //   MuiInputBase: {
    //     styleOverrides: {
    //       multiline: {
    //         padding: '18px!important',
    //       },
    //     },
    //   },
    //   MuiInputLabel: {
    //     styleOverrides: {
    //       root: {
    //         fontWeight: 'normal',
    //         marginBottom: '0.8rem',
    //         color: theme.palette.grey[900],
    //         textAlign: 'left',
    //         transform: 'none!important',
    //       },
    //     },
    //   },
    //   MuiFormControlLabel: {
    //     styleOverrides: {
    //       label: {
    //         textAlign: 'left',
    //       },
    //     },
    //   },
    //   MuiFormLabel: {
    //     styleOverrides: {
    //       root: {
    //         display: 'inline-block',
    //         textAlign: 'left',
    //         marginBottom: '0.8rem',
    //         '&.Mui-error': {
    //           color: 'inherit',
    //         },
    //       },
    //     },
    //   },
    //   MuiFormHelperText: {
    //     styleOverrides: {
    //       contained: {
    //         marginLeft: 0,
    //       },
    //     },
    //   },
    //   MuiRadio: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.palette.grey[900],
    //       },
    //     },
    //   },
    //   MuiFab: {
    //     styleOverrides: {
    //       root: {
    //         backgroundColor: 'white',
    //         boxShadow: theme.shadows[10],
    //       },
    //     },
    //   },
    //   MuiStepLabel: {
    //     styleOverrides: {
    //       label: {
    //         color: theme.palette.grey[900],
    //       },
    //     },
    //   },
    //   MuiBackdrop: {
    //     styleOverrides: {
    //       root: {
    //         backdropFilter: 'blur(5px)',
    //         backgroundColor: 'transparent',
    //       },
    //     },
    //   },
    //   MuiCard: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: 0,
    //         padding: '0.8rem',
    //       },
    //     },
    //   },
    //   MuiPaper: {
    //     styleOverrides: {
    //       root: {
    //         color: theme.palette.grey[900],
    //       },
    //     },
    //   },
  },
});
