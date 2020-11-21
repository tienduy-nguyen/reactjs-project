import React, { useState } from 'react';
import {
  PageHeader,
  Button,
  Descriptions,
  Tooltip,
  Menu,
  Breadcrumb,
} from 'antd';
import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export const Demo = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (e) => {
    setCollapsed(!collapsed);
  };
  return (
    <div className='App'>
      <div className='button-collapse'>
        <Button type='primary' icon={<SearchOutlined />}>
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <br />
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
        <Button type='primary' loading>
          Loading
        </Button>
        <>
          <Tooltip title='search'>
            <Button type='primary' shape='circle' icon={<SearchOutlined />} />
          </Tooltip>
          <Button type='primary' shape='circle'>
            A
          </Button>
          <Button type='primary' icon={<SearchOutlined />}>
            Search
          </Button>
          <Tooltip title='search'>
            <Button shape='circle' icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <br />
          <Tooltip title='search'>
            <Button shape='circle' icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title='search'>
            <Button type='dashed' shape='circle' icon={<SearchOutlined />} />
          </Tooltip>
          <Button type='dashed' icon={<SearchOutlined />}>
            Search
          </Button>
        </>
        ,
      </div>
      <div className='site-page-header-ghost-wrapper'>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title='Title'
          subTitle='This is a subtitle'
          extra={[
            <Button key='3'>Operation</Button>,
            <Button key='2'>Operation</Button>,
            <Button key='1' type='primary'>
              Primary
            </Button>,
          ]}
        >
          <Descriptions size='small' column={3}>
            <Descriptions.Item label='Created'>Lili Qu</Descriptions.Item>
            <Descriptions.Item label='Association'>
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label='Creation Time'>
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label='Effective Time'>
              2017-10-10
            </Descriptions.Item>
            <Descriptions.Item label='Remarks'>
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1' icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key='2' icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
              <Menu.Item key='3'>Tom</Menu.Item>
              <Menu.Item key='4'>Bill</Menu.Item>
              <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='9' icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
