import { Theme } from '@mui/material/styles/createTheme';

export interface CustomMuiTheme extends Theme {
  platformName: string;
  logoPng: string;
  layout: {
    sidebarWidth: number;
  };
}
