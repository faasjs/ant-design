import { useState, useEffect } from 'react'
import {
  Table as AntdTable,
  TableProps as AntdTableProps,
  TableColumnProps as AntdTableColumnProps
} from 'antd'
import { FaasItemProps } from './data'

export type TableItemProps<T = any> = AntdTableColumnProps<T> & FaasItemProps

export type TableProps<T = any> = AntdTableProps<T> & {
  items: TableItemProps[]
}

export function Table (props: TableProps) {
  const [columns, setColumns] = useState<TableItemProps[]>()

  useEffect(() => {
    for (const item of props.items) {
      if (!item.key) item.key = item.id
      if (!item.dataIndex) item.dataIndex = item.id
      if (!item.title) item.title = item.id.toUpperCase()

      switch (item.type) {
        case 'string[]':
          item.render = value => value.join(', ')
          break
      }
    }

    setColumns(props.items)
  }, [props.items])

  if (!columns) return null

  return <AntdTable
    { ...props }
    rowKey={ props.rowKey || 'id' }
    columns={ columns }
  />
}
