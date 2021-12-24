import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Description } from './Description'
import 'antd/dist/antd.css'

export default {
  title: 'Description',
  component: Description,
} as ComponentMeta<typeof Description>

const Template = args => <Description { ...args } />

export const Default: ComponentStory<typeof Description> = Template.bind({})

function MockChildren ({ value }: { value?: string }) {
  return <strong>{value}</strong>
}

Default.args = {
  items: [
    {
      type: 'string',
      id: 'string'
    },
    {
      type: 'string[]',
      id: 'string[]'
    },
    {
      type: 'number',
      id: 'number'
    },
    {
      type: 'number[]',
      id: 'number[]'
    },
    {
      type: 'boolean',
      id: 'boolean'
    },
    {
      type: 'string',
      id: 'undefined'
    },
    {
      type: 'string',
      id: 'null'
    },
    {
      type: 'string',
      id: 'custom',
      children: <MockChildren />,
    }
  ],
  dataSource: {
    string: 'string',
    'string[]': ['a', 'b'],
    number: 1,
    'number[]': [1, 2],
    boolean: true,
    undefined: undefined,
    null: null,
    custom: 'custom',
  }
}
