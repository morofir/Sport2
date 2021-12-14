import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {ArrowRightProps} from '../../src/models/svgModel';

const ArrowRight = ({
  color = '#000000',
  width = 25,
  height = 25,
}: ArrowRightProps) => {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 16 16">
      <Path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </Svg>
  );
};

export default ArrowRight;
