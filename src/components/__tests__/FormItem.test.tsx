import { render, screen } from '@testing-library/react'
import { FormItem } from '../FormItem'

describe('FormItem', () => {
  it('should work', function () {
    render(<FormItem
      id='test'
      type='string' />)

    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
