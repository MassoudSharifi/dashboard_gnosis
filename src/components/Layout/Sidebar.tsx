import {Avatar, Badge,  Layout, Menu,  Space,Typography} from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import React from 'react';

const icons=["/images/github.svg","/images/twitter.svg","/images/mail.svg","/images/message.svg"];

const {Sider} = Layout;
const {Text} = Typography;
export const PRIMARY_COLOR = "#008068";
export  function Sidebar() {
const [selectedKey,setSelectedKey]=React.useState("1");


  const handleSelectMenuItem=({key}:{key:string})=>{
setSelectedKey(key);
  }
  return (
    <Sider
    theme="light"
    width={240}
    style={styles.sider}
    >
    
        <Space size={23} style={{padding:"30px 0px"}} >

<Avatar  src="/images/logo.svg" size="large" />
<Text strong>Gnosis Safe</Text>
<LeftOutlined />
    </Space>
         <Menu theme="light" style={styles.menu} mode="inline" selectedKeys={[selectedKey]} onSelect={handleSelectMenuItem} >
        <MenuItem key="1" selectedKey={selectedKey} >
          Discover
        </MenuItem>
        <MenuItem key="2" selectedKey={selectedKey} >
          Favorites
        </MenuItem>
        <MenuItem key="3" selectedKey={selectedKey} >
          My Creations
        </MenuItem>
        <MenuItem key="4" selectedKey={selectedKey} >
          Projects
        </MenuItem>
        <MenuItem key="5" selectedKey={selectedKey} >
          Blog
        </MenuItem>
        <MenuItem key="6" selectedKey={selectedKey} >
          Pricing
        </MenuItem>
        <MenuItem key="7" selectedKey={selectedKey} >
          Careers
        </MenuItem>
      </Menu>

      <Space align="center" size={23} direction="vertical" style={{width:"100%"}} >

<Text >Account</Text>

<Space direction="vertical" size="middle" align="center" >
<Text >Log Out</Text>
<Space size={11} >
{icons?.map((icon)=>(
<Avatar  src={icon} key={icon}  />
))}
</Space>
<Text >© 2022 Smart Future Labs</Text>
</Space>

    </Space>

    </Sider>
  )
}

interface MenuItemProps {
  key: string;
  children:React.ReactNode
  selectedKey:string

}

const MenuItem=({children,key,selectedKey,...rest}:MenuItemProps)=>{
    return (
        <Menu.Item 
        //@ts-ignore
        icon={selectedKey===rest?.eventKey?  <Badge color={PRIMARY_COLOR}  />:<div></div>} style={{borderRadius:"5px"}} {...rest} >
            {children}
        </Menu.Item>
    )
}

const styles={
    sider:{
        height: '100%',  
        padding:"10px 30px 60px 30px",
        boxShadow:"0px 0px 18px 7px rgba(0, 0, 0, 0.05)",
        borderRadius:" 0px 35px 35px 0px"
    },
    menu:{
      border:"none",
      borderTop:`1px solid ${PRIMARY_COLOR}`,
      padding:"15px 10px 100px 10px",
    }  
}