import '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    accent?: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}
