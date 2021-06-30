
import BaseButton  from './Button/Button';

export const CancelButton = (props:any) => ( <BaseButton {...props} cancel  /> )
export const ActionButton = (props:any) => ( <BaseButton {...props}   /> )

export { default as BaseButton } from './Button/Button';
export { default as BaseHeader } from './Header/Header';
export { default as BaseTexfield } from './TextField/TextField';
export { default as BaseMenu } from './Menu/Menu';
