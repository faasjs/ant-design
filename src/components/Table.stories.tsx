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
      id: 'null'
    },
    {
      type: 'string',
      id: 'custom',
      render: value => <strong>{ value }</strong>,
    },
  ],
  rowKey: 'string',
  dataSource: [
    {
      string: 'string',
      'string[]': ['a', 'b'],
      number: 1,
      'number[]': [1, 2],
      boolean: true,
      undefined: undefined,
      null: null,
      custom: 'custom',
    }
  ],
}
