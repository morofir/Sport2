import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ArrowLeftProps} from '../../src/models/svgModel';

const Arrowleft = ({
  color = '#000000',
  width = 10,
  height = 20,
}: ArrowLeftProps) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 32 32">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"
      />
    </Svg>
  );
};
export default Arrowleft;
