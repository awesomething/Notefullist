import React from 'react'
import PropTypes from 'prop-types'
import './RoundButton.css'

export default function NavRoundButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavRoundButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavRoundButton.defaultProps ={
  tag: 'a',
}

NavRoundButton.propTypes = {
  tag: PropTypes.func,
  children: PropTypes.array,
  className: PropTypes.string
}