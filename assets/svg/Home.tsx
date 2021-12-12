import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {HomeProps} from '../../src/models/svgModel';

const Home = ({color = '#000000', width = 10, height = 20}: HomeProps) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 15 16">
      <Path
        fill={color}
        d="M7.5 0 0 5.714V16h5.063v-5.333h4.875V16H15V5.714z"
        fillRule="nonzero"
      />
    </Svg>
  );
};
export default Home;
