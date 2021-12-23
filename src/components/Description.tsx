import { Descriptions, DescriptionsProps } from 'antd'
import { FaasItemProps } from './data'

export type DescriptionItemProps = FaasItemProps

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

  switch (props.item.type) {
    case 'string':
      return props.value
    case 'string[]':
      return props.value.join(', ')
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
