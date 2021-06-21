import { Colors } from 'models/interfaces';

export const colors: Colors = {
  primary: {
    main: '#6EA9EE',
    dark: '#42658F',
    darker: '#2C445F',
  },

  secondary: { main: '#F89C5A', dark: '#DF8C51' },
  typography: {
    main: '#959AA1',
    dark: '#56595E',
    darker: '#323942',
  },

  background: '#1D2228',
  white: '#FFFFFE',
} as const;
