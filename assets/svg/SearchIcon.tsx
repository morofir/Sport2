import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SearchProps} from '../../src/models/svgModel';

const Searchicon = ({
  color = '#000000',
  width = 10,
  height = 20,
}: SearchProps) => {
  return (
    <Svg width={18} height={18}>
      <Path
        d="M7.25 0C3.255 0 0 3.255 0 7.25c0 3.994 3.255 7.25 7.25 7.25a7.208 7.208 0 0 0 4.562-1.626l4.906 4.906a.751.751 0 0 0 1.062 0 .742.742 0 0 0 0-1.054l-4.906-4.906a7.211 7.211 0 0 0 1.625-4.57c0-3.995-3.255-7.25-7.25-7.25zM7.2 1.44c3.19 0 5.76 2.57 5.76 5.76s-2.57 5.76-5.76 5.76-5.76-2.57-5.76-5.76S4.01 1.44 7.2 1.44z"
        fill="#000"
        fillRule="nonzero"
        opacity={0.328}
      />
    </Svg>
  );
};

export default Searchicon;
