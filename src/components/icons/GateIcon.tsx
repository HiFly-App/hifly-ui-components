import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const GateIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="currentStroke"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19V5m0 0-7 7m7-7 7 7"
    />
  </Svg>
);
export default GateIcon;
