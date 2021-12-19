import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from '../Button'

it('should work', function(){
  render(<Button label='test' />)

  expect(screen.getByText('test')).toBeInTheDocument()
})
