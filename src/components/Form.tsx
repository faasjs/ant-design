import {
  Button,
  Col,
  Form as AntdForm, FormItemProps, FormProps, Input, Row
} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {
  InferProps, arrayOf, shape
} from 'prop-types'
import { FaasItemTypes } from './data'
import type { RuleObject, ValidatorRule } from 'rc-field-form/lib/interface'

const PropTypes = { items: arrayOf<InferProps<typeof FaasItemTypes> & FormItemProps>(shape(FaasItemTypes)).isRequired }

function Item (props: InferProps<typeof FaasItemTypes> & FormItemProps) {
  console.log(props)
  switch (props.type) {
    case 'string':
      return <AntdForm.Item
        label={ props.title || props.id }
        name={ props.id }
        { ...props }
      >
        <Input />
      </AntdForm.Item>
    case 'string[]':
      return <AntdForm.List
        name={ props.id }
        rules={ props.rules as ValidatorRule[] }>
        {(fields, { add, remove }) => <>
          <div
            className='ant-row ant-form-item ant-form-item-label'
            style={ { rowGap: '0px' } }>
            <label className={ props.rules?.find((r: RuleObject) => r.required) && 'ant-form-item-required' }>{props.title || props.id}</label>
          </div>
          {fields.map(field => <AntdForm.Item key={ field.key }>
            <Row gutter={ 16 }>
              <Col span={ 23 }>
                <AntdForm.Item
                  { ...field }
                  noStyle
                >
                  <Input style={ {
                    width: '100%',
                    marginRight: '12px'
                  } } />
                </AntdForm.Item>
              </Col>
              <Col span={ 1 }>
                <Button
                  danger
                  type='link'
                  style={ { float: 'right' } }
                  icon={ <MinusCircleOutlined /> }
                  onClick={ () => remove(field.name) }
                />
              </Col>
            </Row>
          </AntdForm.Item>)}
          <AntdForm.Item>
            <Button
              type='dashed'
              block
              onClick={ () => add() }
              icon={ <PlusOutlined /> }
            >
            </Button>
          </AntdForm.Item>
        </>}
      </AntdForm.List>
    default:
      return null
  }
}

export function Form (props: InferProps<typeof PropTypes> & FormProps) {
  console.log(props)
  return <AntdForm { ...props }>
    {props.items.map(item => <Item
      key={ item.id }
      { ...item }
    />)}
  </AntdForm>
}
