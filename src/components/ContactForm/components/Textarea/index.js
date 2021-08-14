import React from 'react'

import { TextareaContainer } from './styled'

export default function Input({
  type,
  label,
  error,
  onChange,
  value,
  name
}) {
  return (
    <TextareaContainer error={error}>
      <textarea
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        required
      />
      <span>{label}</span>
    </TextareaContainer>
  )
}
