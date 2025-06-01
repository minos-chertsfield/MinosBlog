import React from 'react';
import { Space, Typography } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

const FooterBar: React.FC = () => (
  <div style={{ textAlign: 'center', padding: '16px 0', color: '#888' }}>
    <Space direction="vertical" size={0} style={{ width: '100%' }}>
      <Text type="secondary">
        © 2024 Minos Blog. All rights reserved.
      </Text>
      <Text type="secondary">
        粤ICP备xxxxxxx号
      </Text>
      <Space>
        <Link href="mailto:your@email.com" target="_blank">
          <MailOutlined /> 邮箱
        </Link>
        <Link href="https://github.com/你的github" target="_blank">
          <GithubOutlined /> GitHub
        </Link>
      </Space>
      <Text type="secondary" style={{ fontSize: 12 }}>
        由 React & Ant Design 强力驱动
      </Text>
    </Space>
  </div>
);

export default FooterBar;