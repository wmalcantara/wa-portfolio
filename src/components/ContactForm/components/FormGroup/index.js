import React from 'react'

import { FormGroupContainer } from './styled'

export default function FormGroup({ children, error }) {
  return (
    <FormGroupContainer>
      {children}
      {error && <small>{error}</small>}
    </FormGroupContainer>
  )
}
