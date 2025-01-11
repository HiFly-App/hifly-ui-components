import * as React from 'react';
import Svg, {SvgProps, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
const BaggageIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 12 12" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke={props.color || 'black'} // Use defau
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M4 10.5v-7c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C5.304 1.5 5.536 1.5 6 1.5s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C8 2.804 8 3.036 8 3.5v3.25m0 2v1.75m-4.6 0h5.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .655-.655C11 9.361 11 8.941 11 8.1V5.9c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C9.861 3.5 9.441 3.5 8.6 3.5H3.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C1 4.639 1 5.059 1 5.9v2.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164Zm3-1.75h2.45c.14 0 .21 0 .264-.027a.25.25 0 0 0 .109-.11c.027-.053.027-.123.027-.263v-1.2c0-.14 0-.21-.027-.264a.25.25 0 0 0-.11-.109C9.06 6.75 8.99 6.75 8.85 6.75H6.4c-.14 0-.21 0-.264.027a.25.25 0 0 0-.109.11C6 6.94 6 7.01 6 7.15v1.2c0 .14 0 .21.027.264a.25.25 0 0 0 .11.109c.053.027.123.027.263.027Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width="100%" height="100%" fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BaggageIcon;
