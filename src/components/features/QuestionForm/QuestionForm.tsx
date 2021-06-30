import React from 'react'
import './QuestionForm.css'
import store, { ActionTypes } from '../../../store';

import {
  Card as AntCard,
  Form as AntForm,
  Input as AntInput
} from 'antd'
import { ActionButton, CancelButton } from '../../base';

const QuestionForm = () => {
  
  const [form] = AntForm.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values)
    store.dispatch({type:ActionTypes.QUESTION_ASK, data:values})
  }

  const onReset = () => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <AntCard title="Ask Your Own Question">
      <AntForm
        form={form}
        name="control-hooks"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        
        <AntForm.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
        <AntInput />

        </AntForm.Item>

        <AntForm.Item
          label="Your Text"
          name="text"
          rules={[
            { required: true, message: 'Please input your questions text !' },
          ]}
         >
         <AntInput.TextArea />
         
        </AntForm.Item>

        <AntForm.Item wrapperCol={{ offset: 8, span: 16 }}>

          <CancelButton onClick={onReset}>Reset Fields</CancelButton>
          <ActionButton onClick={ () => form.submit()}>Submit You Question</ActionButton>

        </AntForm.Item>
      </AntForm>
    </AntCard>
  )
}

export default QuestionForm
