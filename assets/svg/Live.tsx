import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {LiveProps} from '../../src/models/svgModel';

const Live = ({color = '#000000', width = 25, height = 20}: LiveProps) => (
  <Svg height={height} width={width} viewBox="0 -2 15 20">
    <Path
      d="M13.53 2.434v1.36a1.65 1.65 0 0 1-3.298-.001V2.434h-4.45v1.355a1.653 1.653 0 1 1-3.306 0V2.434h-.701C.787
       2.434 0 3.214 0 4.144V15.29C0 16.242.81 17 1.775 17h12.45c.988 0 1.774-.78 1.774-1.71L16 4.144c0-.952-.81-1.71-1.776-1.71h-.694zm.694 12.856H1.775V6.914h12.45v8.376zM3.531 3.95V.66c0-.412.244-.66.569-.66.325
        0 .569.226.569.66v3.29c0 .41-.244.637-.57.637-.324 0-.568-.227-.568-.638zm7.71 0V.66c0-.412.244-.66.57-.66.325 0 .568.226.568.66v3.29c0 .41-.243.637-.568.637-.326 0-.57-.227-.57-.638z"
      fill={color}
    />
  </Svg>
);

export default Live;
