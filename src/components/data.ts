export type FaasItemType =
  'string' | 'string[]' |
  'number' | 'number[]' |
  'boolean'

export type FaasItemProps = {
  type: FaasItemType
  id: string
  title?: string
  children?: FaasItemProps[]
}
