import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Descriptions, DescriptionsProps } from 'antd'
import { FaasItemProps } from './data'

export type DescriptionItemProps<T = any> = FaasItemProps & {
  content?: (props: {
    value: T
  }) => JSX.Element
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

  if (props.item.content)
    return props.item.content({ value: props.value })

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
      label={ item.title || item.id.toUpperCase() }>
      <DescriptionItemContent
        item={ item }
        value={ props.dataSource[item.id] }
      />
    </Descriptions.Item>)
  }</Descriptions>
}
