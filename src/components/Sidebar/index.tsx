import React, { useState } from 'react';
import { Card, List, Tag, Input, Collapse, Tree } from 'antd';
import { DownOutlined, RightOutlined, FolderOutlined, FileOutlined } from '@ant-design/icons';
import './index.less';
import { articleData, categoryData, friendLinkData, tagData } from './mock/MockData';


const Sidebar: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['frontend']);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  const onSelect = (selectedKeysValue: React.Key[]) => {
    console.log('选中:', selectedKeysValue);
    setSelectedKeys(selectedKeysValue);
  };

  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue);
  };

  return (
    <div className="sidebar-container">
      {/* 搜索框 */}
      <Card className="sidebar-card">
        <Input.Search placeholder="搜索文章..." className="sidebar-search" />
      </Card>

      {/* 分类 - 使用Tree组件实现展开收起 */}
      <Card title="分类" className="sidebar-card">
        <Tree
          className="sidebar-category-tree"
          showIcon
          defaultExpandedKeys={['frontend']}
          expandedKeys={expandedKeys}
          selectedKeys={selectedKeys}
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={categoryData}
          switcherIcon={({ expanded }) => 
            expanded ? <DownOutlined /> : <RightOutlined />
          }
        />
      </Card>

      {/* 标签云 */}
      <Card title="标签" className="sidebar-card">
        <div className="sidebar-tags">
          {tagData.map(tag => (
            <Tag key={tag} className="sidebar-tag" color="blue">
              {tag}
            </Tag>
          ))}
        </div>
      </Card>

      {/* 最新文章 */}
      <Card title="最新文章" className="sidebar-card">
        <List
          className="sidebar-list"
          dataSource={articleData}
          renderItem={item => (
            <List.Item className="sidebar-list-item">
              <div>
                <div className="article-title">{item.title}</div>
                <div className="article-date">{item.date}</div>
              </div>
            </List.Item>
          )}
        />
      </Card>

      {/* 友情链接 */}
      <Card title="友情链接" className="sidebar-card">
        <List
          className="sidebar-list"
          dataSource={friendLinkData}
          renderItem={item => (
            <List.Item className="sidebar-list-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                {item.name}
              </a>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Sidebar;