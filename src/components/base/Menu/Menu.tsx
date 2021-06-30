import React from 'react'
import './Menu.css'

import { Menu as AntMenu, Menu as AntSubMenu } from 'antd'

import { Link  } from 'react-router-dom'

const Menu = () => {

  const handleClick = (evt:any) => {
    console.log('click ', evt);
  };

  return (
    
    <AntMenu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <AntSubMenu key="sub1" title="Home">

        <AntMenu.ItemGroup key="g1" title="User">
          <AntMenu.Item key="1"><Link to="/home">Home</Link></AntMenu.Item>
        </AntMenu.ItemGroup>

        <AntMenu.ItemGroup key="g2" title="Naivgation">
          <AntMenu.Item key="2"><Link to="/dashboard">Dashboard</Link></AntMenu.Item>
          <AntMenu.Item key="3"><Link to="/questions">Question List</Link></AntMenu.Item>
          <AntMenu.Item key="4"><Link to="/ask">Ask a Question</Link></AntMenu.Item>
        </AntMenu.ItemGroup>
        
      </AntSubMenu>

    </AntMenu>
  )
}

export default Menu
