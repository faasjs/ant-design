import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormItem, FormItemProps } from './FormItem'
import 'antd/dist/antd.css'
import { Form } from './Form'

export default {
  title: 'FormItem',
  component: FormItem,
} as ComponentMeta<typeof FormItem>

const Template = args => <Form items={ [args] } />

export const String: ComponentStory<typeof FormItem> = Template.bind({})

String.args = {
  type: 'string',
  id: 'string',
}

export const StringList: ComponentStory<typeof FormItem> = Template.bind({})

StringList.args = {
  type: 'string[]',
  id: 'string list',
}

export const Number: ComponentStory<typeof FormItem> = Template.bind({})

Number.args = {
  type: 'number',
  id: 'number',
}

export const NumberList: ComponentStory<typeof FormItem> = Template.bind({})

NumberList.args = {
  type: 'number[]',
  id: 'number list',
}

export const Boolean: ComponentStory<typeof FormItem> = Template.bind({})

Boolean.args = {
  type: 'boolean',
  id: 'boolean',
}

export const CustomRender: ComponentStory<typeof FormItem> = Template.bind({})

CustomRender.args = {
  type: 'string',
  id: 'string',
  input: ({ value, onChange }) => <input
    value={ value?.toUpperCase() }
    onChange={ e => onChange(e.target.value) }
  />,
} as FormItemProps<string>