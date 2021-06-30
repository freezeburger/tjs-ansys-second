import React from 'react';
import './Button.css';
import {Button as AntButton } from 'antd';

interface ButtonProps{
  children:string;
  cancel:boolean;
  block:boolean;
  onClick( evt:any ):void;
}

const Button = (props:ButtonProps) => (
  <AntButton type="primary" size="large" danger={props.cancel} block={props.block}  onClick={props.onClick}>
    {props.children}
  </AntButton>
);

Button.defaultProps = {
  cancel:false,
  block:false,
  onClick: (evt:any) => console.log('BaseButton', evt)
}

export default Button;
