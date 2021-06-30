import React from 'react'
import './Header.css'
import { HeaderProps } from './Header.props'

import { withRouter } from 'react-router-dom'
import { PageHeader as AntPageHeader, Drawer as AntDrawer } from 'antd'
import { BaseButton, BaseMenu } from '../'

const Header = (props: HeaderProps) => {
  
  const [visible, setVisible] = React.useState(true)

  const toggle = (evt:any) => setVisible(!visible);

  return (
    <>
      <AntPageHeader
        title={props.children}
        className="site-page-header-ghost-wrapper"
        onBack={props.history.goBack}
      >

        <BaseButton onClick={toggle}>Menu</BaseButton>
        
        <AntDrawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={toggle}
          visible={visible}
        >
        
            <BaseMenu></BaseMenu>

        </AntDrawer>

      </AntPageHeader>
    </>
  )
}

const HeaderWithRouter = withRouter<any, any>(Header)
export default HeaderWithRouter
