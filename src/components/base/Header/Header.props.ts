import { BaseProps } from "../@interfaces/Base.props";

export interface HeaderProps extends BaseProps {
    children: string;    
    [key:string]:any;
}