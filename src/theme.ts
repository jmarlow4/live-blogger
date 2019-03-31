import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';
import { teal, amber, red } from '@material-ui/core/colors';

const bodyFont = 'Lato, sans serif';
const headingFont = 'Lora, serif';

const baseTheme = {
  palette: {
    primary: teal,
    secondary: amber,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
    fontFamily: bodyFont,
    fontWeightMedium: 700,
  },
  overrides: {
    MuiTypography: {
      h1: { fontFamily: headingFont },
      h2: { fontFamily: headingFont },
      h3: { fontFamily: headingFont },
      h4: { fontFamily: headingFont },
      h5: { fontFamily: headingFont, fontWeight: 700 },
      h6: { fontFamily: headingFont, fontWeight: 700 },
    },
  },
};

export const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'light' as PaletteType,
  },
});

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'dark' as PaletteType,
  },
});
