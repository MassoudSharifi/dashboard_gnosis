import { Badge, Button, Col, Divider, Input, Layout, Radio, RadioChangeEvent, Row, Space, Switch, Typography } from "antd"
import {BellOutlined,UserOutlined,SearchOutlined,CloseOutlined} from "@ant-design/icons"
import Icon from '@ant-design/icons';
import { ReactComponent as MonthSvg } from '../../icons/month.svg';
import { ReactComponent as StarSvg } from '../../icons/star.svg';
import React from "react";


const { Header:AntdHeader } = Layout
const { Text } = Typography
export default function Header() {
    const [type ,setType]=React.useState("a")

    const handleChangeType=(e:RadioChangeEvent)=>{
        setType(e.target.value)
    }


  
  return (
    <AntdHeader style={styles.header}>
        <Row justify="space-between">
            <Col>
            <Space size={20} align="center">
        <Button type="primary"  style={styles.buttonPrimary}>
        We’re hiring! <CloseOutlined />
        </Button>
        <Button  style={styles.buttonWarning}>
        New Query
        </Button>
<Input 
placeholder="Search"
 style={styles.search} size="large"

 prefix={<div><SearchOutlined /> <Divider type="vertical" style={{height:"23px",margin:"3px"}} /></div>} 
 />
        <Radio.Group onChange={handleChangeType} value={type}   buttonStyle="solid" style={styles.radioGroup}>
      <Radio.Button value="a"  style={{...styles.radioButton,background:type==="a"?"linear-gradient(270.1deg, #00CBA5 0%, #008068 99.85%)":""}}>NFTs</Radio.Button>
      <Radio.Button value="b" style={{...styles.radioButton,marginLeft:"10px",background:type==="b"?"linear-gradient(270.1deg, #00CBA5 0%, #008068 99.85%)":""}}>DAOs</Radio.Button>
    </Radio.Group>
        </Space>
            </Col>
            <Col>
            
            <Space size={30}>
            <Switch
      
      checkedChildren={ <Icon

        component={StarSvg} />
           }
      unCheckedChildren={<Icon
        component={MonthSvg} />}
      
    />
    <Text strong>En</Text>
    <Badge count={9} size="small">
    <BellOutlined  style={styles.icon}/>
    </Badge>
    <UserOutlined style={styles.icon}/>
</Space>
            </Col>
        </Row>
   



    </AntdHeader>
  )
}


const styles={
    header:{
        backgroundColor:'white',
        boxShadow: "0px 0px 18px 7px rgba(0, 0, 0, 0.05)",
        marginLeft:"-40px",
        paddingLeft:"75px",
        paddingRight:"20px",
    },
    buttonPrimary:{
        borderRadius:"14px",
        background:"linear-gradient(270.1deg, #00CBA5 0%, #008068 99.85%)",
        height:"40px",
    },
    buttonWarning:{
        borderRadius:"14px",
        background:"linear-gradient(90deg, #FF9537 0%, #EE7000 100%)",
        height:"40px",
    },
    icon:{
        fontSize:"20px",
    },
    radioGroup:{padding:"5px", background: "#F1F1F1",borderRadius:"12px"},
    radioButton:{border:"none",background:"transparent",borderRadius:"40px"},
    search:{
        border:"none",
        backgroundColor:"#F1F1F1",
        borderRadius:"12px",
       
    }

   
}