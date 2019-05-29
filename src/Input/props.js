import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

import { BASE_UNIT, BLACK, FONT } from '../services/constants'
import pick from '../services/pick'
import * as ErrorProps from '../Error/props'

import * as LabelProps from '../Label/props'
import * as PlaceholderProps from '../Placeholder/props'
import * as IconProps from '../Icon/props'
import * as UnderlineProps from '../Underline/props'

const noop = () => {}

export const propTypes = {
  // ...TextInput.propTypes, // Breaks IDE auto-completion
  ...ErrorProps.propTypes,
  ...LabelProps.propTypes,
  ...PlaceholderProps.propTypes,
  ...IconProps.propTypes,
  ...UnderlineProps.propTypes,
  style: PropTypes.node,
  activeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  icon: PropTypes.node,
  iconOverlay: PropTypes.node,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onFocus: PropTypes.func,
  onLayout: PropTypes.func,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingTop: PropTypes.number,
  register: PropTypes.func.isRequired
}

/** @type {PropTypes.InferProps<typeof propTypes>} */
export const defaultProps = {
  ...ErrorProps.defaultProps,
  accessible: true,
  style: {},
  color: BLACK,
  fontSize: FONT,
  fontWeight: 'normal',
  marginBottom: BASE_UNIT,
  onBlur: noop,
  onChangeText: noop,
  onContentSizeChange: noop,
  onFocus: noop,
  paddingBottom: BASE_UNIT,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: BASE_UNIT * 3,
  register: function () {},
  value: undefined
}

export const pickTextInputProps = (props) => {
  return pick(props, Object.keys(TextInput.propTypes))
}
