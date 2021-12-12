import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ScoresProps} from '../../src/models/svgModel';

const Scores = ({color = 'gray', width = 10, height = 20}: ScoresProps) => {
  return (
    <Svg height={height} width={width} viewBox="0 -7 20 32">
      <Path fill={color} d="M9.5 4.5H10.5V5.5H9.5zM9.5 9.5H10.5V10.5H9.5z" />
      <Path
        fill={'black'}
        fill-rule="nonzero"
        d="M2 0h7v15H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0z"
      />
      <Path
        fill={'black'}
        fill-rule="nonzero"
        d="M13 0h7v15h-7c-1.105 0-2-.895-2-2V2c0-1.105.895-2 2-2z"
      />
      <Path
        fill={color}
        fill-rule="nonzero"
        d="M15.899 4.069v2.72l.778.577c.163-.084.276-.253.276-.45V3.5c0-.12-.043-.232-.113-.316l-.941.886zM15.899 8.386v2.721l.778.577c.163-.085.276-.254.276-.45V7.816c0-.12-.043-.232-.113-.316l-.941.886zM3.146 3.977h2.682l.927-.872C6.67 3.042 6.564 3 6.443 3H2.51c-.113 0-.219.042-.304.105l.941.872zM5.899 
                                4.069v2.72l.778.577c.163-.084.276-.253.276-.45V3.5c0-.12-.043-.232-.113-.316l-.941.886zM5.821 6.916L4.795 6.916 4.158 6.916 3.132 6.916 2.417 7.444 3.132 7.964 4.158 7.964 4.795 7.964 5.821 7.964 6.535 7.444zM3.146 10.931h2.682l.927.872c-.085.063-.191.106-.312.106H2.51c-.113 0-.219-.043-.304-.106l.941-.872zM2.113 11.719c-.07-.085-.113-.197-.113-.317V7.985c0-.197.113-.365.276-.45l.778.577v2.742l-.94.865z"
      />
    </Svg>
  );
};
export default Scores;
