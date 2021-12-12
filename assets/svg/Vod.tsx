import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {VodProps} from '../../src/models/svgModel';

const Vod = ({color = 'black', width = 23, height = 15}: VodProps) => {
  return (
    <Svg height={height} width={width} viewBox="-2 -7 26 27">
      <Path
        d="M0 2v11a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm9 2 6 3.5L9 11V4z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  );
};
export default Vod;
