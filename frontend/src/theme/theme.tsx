import { CustomMuiTheme } from '@interfaces';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { merge } from 'lodash-es';

import { baseProps } from './themeData/baseProps';
import { globalCss } from './themeData/globalCss';
import { overrides } from './themeData/overrides';
import { palette } from './themeData/palette';
import { props } from './themeData/props';
import { typography } from './themeData/typography';

const theme: CustomMuiTheme = { ...baseProps, ...createTheme({ ...props, palette, typography }) };
const mergedOverrides = merge({}, theme, { ...overrides(theme), MuiCssBaseline: { ...globalCss } });
const themeWithOverrides = { ...theme, ...mergedOverrides };

export const RBoardTheme = responsiveFontSizes(themeWithOverrides, { factor: 3, disableAlign: true }) as CustomMuiTheme;
