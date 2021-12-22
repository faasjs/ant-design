import { oneOf, string } from 'prop-types'

type Type = 'string' | 'string[]'

export const FaasItemTypeTypes = oneOf<Type>(['string', 'string[]'])

export const FaasItemTypes = {
  type: FaasItemTypeTypes.isRequired,
  id: string.isRequired,
  title: string
}
