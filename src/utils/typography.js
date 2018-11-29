import Typography from 'typography';
import theme from 'typography-theme-bootstrap';

// theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
//   li: {
//     padding: 0,
//   },
// });

const typography = new Typography(theme);
const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
