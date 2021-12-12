import React from 'react'
import PropTypes from 'prop-types';
import { Platform, ViewPropTypes, I18nManager } from 'react-native';
import Svg from 'react-native-svg';
import svgs from '../../assets/svgs'

//TODO
// const SvgIcon = (props) => {
//     if(!props.name){
//         return null
//     }
//     const name = svgs[`${props.name}.${Platform.OS}`] || svgs[props.name];

//     if(!name) {
//         return null
//     }
//     const height = props.height && props.height.toString();
//     const width = props.width && props.width.toString();
//     const strokeWidth = props.strokeWidth && props.strokeWidth.toString();

//     const isSimple = React.isValidElement(name);
//     const svgEl = isSimple ? name : name.svg;

//     let viewBox;

//     if (props.viewBox && props.viewBox !== SvgIcon.defaultProps.viewBox) {
//         viewBox = props.viewBox;
//     } else if (!isSimple && name.viewBox) {
//         viewBox = name.viewBox;
//     } else if (props.defaultViewBox) {
//         viewBox = props.defaultViewBox;
//     } else {
//         viewBox = SvgIcon.defaultProps.viewBox;
//     }
//     let options = {
//         fill: props.fill,
//         fillRule: props.fillRule,
//         supportRtl: props.supportRtl,
//         visibility: props.visibility,
//         stroke: props.stroke,
//         strokeWidth: strokeWidth,
//     };
  
//     if (props.dPaths) {
//         let d = '';
//         if (props.dPaths != 'undefined' && props.dPaths != null) {
//             d = SvgUtils.dPathExtract(props.dPaths);
//         }
//         options.transform = SvgUtils.transformExtract(props.dPaths);
//         options.d = d;
//     }

//     return (
//         <Svg
//             height={height}
//             width={width}
//             viewBox={viewBox}
//             style={[
//                 props.style,
//                 {
//                     transform: [{ scaleX: I18nManager.isRTL && props.supportRtl ? -1 : 1 }],
//                 },
//             ]}>
//             {React.cloneElement(svgEl, options)}
//         </Svg>
//     );
// };
// SvgIcon.defaultProps = {
//     fill: 'none',
//     fillRule: 'evenodd',
//     height: '44',
//     width: '44',
//     supportRtl: true,
//     visibility: true,
// };

// SvgIcon.propTypes = {
//     fill: PropTypes.string.isRequired,
//     fillRule: PropTypes.string,
//     d: PropTypes.string,
//     height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     name: PropTypes.string.isRequired,
//     stroke: PropTypes.string,
//     strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//     style: PropTypes.oneOfType([ViewPropTypes.style, PropTypes.array, PropTypes.object]),
//     width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     viewBox: PropTypes.string,
// };

// export default SvgIcon;