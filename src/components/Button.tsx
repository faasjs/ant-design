import {
  bool, string, oneOf, func, InferProps
} from 'prop-types'
import './button.css'

const PropTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: bool,
  /**
   * What background color to use
   */
  backgroundColor: string,
  /**
   * How large should the button be?
   */
  size: oneOf([
    'small',
    'medium',
    'large'
  ]),
  /**
   * Button contents
   */
  label: string.isRequired,
  /**
   * Optional click handler
   */
  onClick: func,
}

/**
 * Primary UI component for user interaction
 */
export function Button ({
  primary, backgroundColor, size, label, ...props
}: InferProps<typeof PropTypes>) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={ [
        'storybook-button',
        `storybook-button--${size}`,
        mode
      ].join(' ') }
      style={ backgroundColor && { backgroundColor } }
      { ...props }
    >
      {label}
    </button>
  )
}

Button.propTypes = PropTypes

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
}
