import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Descriptions, DescriptionsProps } from 'antd'
import { upperFirst } from 'lodash'
import { cloneElement } from 'react'
import { FaasItemProps } from './data'

export type DescriptionItemProps<T = any> = FaasItemProps & {
  children?: JSX.Element
}

export type DescriptionProps = DescriptionsProps & {
  items: DescriptionItemProps[]
  dataSource: any
}

function DescriptionItemContent (props: {
  item: DescriptionItemProps
  value: any
}) {
  if (typeof props.value === 'undefined' || props.value === null)
    return null

  if (props.item.children) {
    return cloneElement(props.item.children, { value: props.value })
  }

  switch (props.item.type) {
    case 'string':
      return props.value
    case 'string[]':
      return props.value.join(', ')
    case 'number':
      return props.value
    case 'number[]':
      return props.value.join(', ')
    case 'boolean':
      return props.value ? <CheckOutlined style={ { marginTop: '4px' } } /> : <CloseOutlined style={ { marginTop: '4px' } } />
    default:
      return null
  }
}

export function Description (props: DescriptionProps) {
  return <Descriptions { ...props }>{
    props.items.map(item => <Descriptions.Item
      key={ item.id }
      label={ item.title || upperFirst(item.id) }>
      <DescriptionItemContent
        item={ item }
        value={ props.dataSource[item.id] }
      />
    </Descriptions.Item>)
  }</Descriptions>
}
