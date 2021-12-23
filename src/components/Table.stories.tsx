import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Table } from './Table'
import 'antd/dist/antd.css'

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template = args => <Table { ...args } />

export const Default: ComponentStory<typeof Table> = Template.bind({})

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
  rowKey: 'string',
  dataSource: [
    {
      string: 'string',
      'string[]': ['a', 'b'],
      undefined: undefined,
      null: null,
    }
  ],
}
