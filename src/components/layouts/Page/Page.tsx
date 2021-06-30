import React from 'react';
import { BaseHeader } from '../../base';
import './Page.css';

interface PageProps{
  pageTitle:string;
  children:any;
}

const Page = ( props:PageProps ) => (
  <div className="Page" data-testid="Page">
      <BaseHeader>{props.pageTitle}</BaseHeader>
        {props.children}
  </div>
);
Page.defaultProps = {
  pageTitle:'Default Title'
}

export default Page;
