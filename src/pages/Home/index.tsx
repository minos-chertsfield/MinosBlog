import React from 'react';
import { Layout } from 'antd';
import NavBar from '../../components/NavBar';
import FooterBar from '../../components/FooterBar';
import ProfileCard from '../../components/ProfileCard';
import Sidebar from '../../components/Sidebar';
import ArticleList from '../../components/ArticleList';
import './index.less'; // 导入Less样式

const { Header, Content, Footer } = Layout;
/**
 * 首页
 */
export default function Home() {
    return (
        <Layout className='home-container'>
            <Header style={{ background: '#fff', padding: 0 }}>
                <NavBar />
            </Header>
            <Content style={{ padding: '24px 50px', display: 'flex', flexDirection: 'row', gap: 24 }}>
                <div className="sidebar" style={{ display: 'flex', gap: 24, flexDirection: 'column', flex: 1 }}>
                    <ProfileCard />
                    <Sidebar />
                </div>
                <div className="post-list" style={{ flex: 3 }}>
                    <ArticleList />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <FooterBar />
            </Footer>
        </Layout>
    );
}