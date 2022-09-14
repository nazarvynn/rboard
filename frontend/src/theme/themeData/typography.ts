import { ThemeOptions } from '@mui/material';

import { palette } from './palette';

export const typography: ThemeOptions['typography'] = {
  allVariants: {
    color: palette.grey ? palette.grey[900] : undefined,
  },
  h1: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  h2: {
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  h3: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  h4: {
    fontSize: 16,
    letterSpacing: 0.09,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
};
