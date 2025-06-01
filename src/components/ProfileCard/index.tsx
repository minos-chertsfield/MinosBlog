import React from 'react';
import { Card, Avatar, Typography, Space, Button } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import './index.less';
const { Title, Paragraph } = Typography;

/**
 * 个人简介卡片
 */
const ProfileCard: React.FC = () => (
  <Card
    className='profile-card-container'
    bordered={false}
    cover={
      <Avatar
        className='profile-card-avatar'
        size={96}
        src="https://i.pravatar.cc/150?img=3" // 这里可以替换为你的头像链接
      />
    }
  >
    <Title level={4} className='profile-card-title'>Minos</Title>
    <Paragraph type="secondary" className='profile-card-description'>
      Android Developer
    </Paragraph>
    <Space>
      <Button
        type="link"
        href="https://github.com/minos-chertsfield"
        target="_blank"
        icon={<GithubOutlined />}
      />
      <Button
        type="link"
        href="mailto:minos.cpp@aliyun.com"
        icon={<MailOutlined />}
      />
    </Space>
  </Card>
);

export default ProfileCard;