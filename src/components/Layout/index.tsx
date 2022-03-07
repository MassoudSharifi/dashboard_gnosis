import { Layout as AntdLayout } from "antd";
import Header from "./Header";
import { Sidebar } from "./Sidebar";


interface LayoutProps {
  children: React.ReactNode
}

const {  Content } = AntdLayout;
export  function Layout({children}: LayoutProps) {
  return (
    <AntdLayout >
   <Sidebar/>
    <AntdLayout>
   <Header/>
      <Content>{children}</Content>
    </AntdLayout>
  </AntdLayout>
  )
}

