import React from 'react'

import { InputContainer } from './styled'

export default function Input({
  type,
  label,
  error,
  onChange,
  value,
  name
}) {
  return (
    <InputContainer error={error}>
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        required
      />
      <span>{label}</span>
    </InputContainer>
  )
}
