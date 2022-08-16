import React from 'react'
import Radio from './style'

interface Props {
  onClick?: () => void
  completed?: boolean
}

const RadioInput: React.FC<Props> = ({onClick, completed}) => {
  return (
    <Radio completed={completed} onClick={onClick}>
      {completed && <img src="/images/icon-check.svg" alt="" />}
    </Radio>
  )
}

export default RadioInput