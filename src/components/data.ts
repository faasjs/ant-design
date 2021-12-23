export type FaasItemType = 'string' | 'string[]'

export type FaasItemProps = {
  type: FaasItemType
  id: string
  title?: string
}
