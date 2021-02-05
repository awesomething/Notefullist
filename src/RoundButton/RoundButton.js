import React from 'react'
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
