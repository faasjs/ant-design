import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form } from './Form'
import 'antd/dist/antd.css'

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template = args => <Form { ...args } />

export const Default: ComponentStory<typeof Form> = Template.bind({})

Default.args = {
  items: [
    {
      type: 'string',
      id: 'string',
    },
    {
      type: 'string[]',
      id: 'string[]',
    }
  ]
}

export const Required: ComponentStory<typeof Form> = Template.bind({})

Required.args = {
  items: [
    {
      type: 'string',
      id: 'string',
      rules: [{ required: true }]
    },
    {
      type: 'string[]',
      id: 'string[]',
      rules: [{ required: true }]
    }
  ]
}
