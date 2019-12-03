import React from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb } from 'antd';

import styles from './IndexPage.css'

import MenuBar from "../components/Menu"

import RouterView from '../routes/routerViews'

const { Header, Content, Sider } = Layout;

class IndexPage extends React.Component {
  render() {
    return <Layout className={styles.wrap}>
      <Header className="header">
        头部
        </Header >
      <Layout className={styles.container}>
        <Sider width={200} className={styles.sider}>
         <MenuBar />
        </Sider>
        <Layout >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.content}>
            <RouterView routes={this.props.routes} />
            </Content>
        </Layout>
      </Layout>
    </Layout>
  }
}

export default connect()(IndexPage);
