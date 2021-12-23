import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Description } from './Description'
import 'antd/dist/antd.css'

export default {
  title: 'Description',
  component: Description,
} as ComponentMeta<typeof Description>

const Template = args => <Description { ...args } />

export const Default: ComponentStory<typeof Description> = Template.bind({})

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
      type: 'string',
      id: 'undefined'
    },
    {
      type: 'string',
      id: 'null'
    },
  ],
  dataSource: {
    string: 'string',
    'string[]': ['a', 'b'],
    undefined: undefined,
    null: null,
  }
}
