import Typography from "typography"

const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.2,
  baseScaleRatio: 8.0,
  headerFontFamily: ['Inter', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['DM Mono', 'monospace'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
