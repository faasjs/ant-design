import {
  Button,
  Row,
  Col,
  Form as AntdForm,
  FormItemProps as AntdFormItemProps,
  Input,
  InputNumber,
  Switch,
  Upload,
} from 'antd'
import {
  MinusCircleOutlined, PlusOutlined, UploadOutlined
} from '@ant-design/icons'
import { FaasItemProps } from './data'
import type { RuleObject, ValidatorRule } from 'rc-field-form/lib/interface'

export type FormItemProps<T = any> = AntdFormItemProps<T> & FaasItemProps & {
  input?: (args: {
    value?: T
    onChange?: (value: T) => void
  }) => JSX.Element
}

export function FormItem<T> (props: FormItemProps<T>) {
  console.log(props)

  if (props.input)
    return <AntdForm.Item
      label={ props.title || props.id }
      name={ props.id }
      { ...props }
    >
      <props.input />
    </AntdForm.Item>

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
                  <Input />
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
    case 'number':
      return <AntdForm.Item
        label={ props.title || props.id }
        name={ props.id }
        { ...props }
      >
        <InputNumber style={ { width: '100%' } } />
      </AntdForm.Item>
    case 'number[]':
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
                  <InputNumber style={ { width: '100%' } } />
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
    case 'boolean':
      return <AntdForm.Item
        label={ props.title || props.id }
        name={ props.id }
        valuePropName='checked'
        { ...props }
      >
        <Switch />
      </AntdForm.Item>
    default:
      return null
  }
}
