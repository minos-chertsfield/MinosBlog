import React from 'react';
import { List, Card, Tag, Button } from 'antd';
import { EyeOutlined, MessageOutlined, CalendarOutlined } from '@ant-design/icons';
import './ArticleList.less';

const articles = [
  {
    id: 1,
    title: 'React 18 新特性解析',
    summary: '本文详细介绍了 React 18 带来的新特性及其使用方法，包括Concurrent Features、Automatic Batching、Suspense改进等重要更新...',
    cover: 'https://picsum.photos/300/120?random=1',
    date: '2024-06-01',
    tags: ['React', '前端'],
    views: 123,
    comments: 5,
  },
  {
    id: 2,
    title: 'TypeScript 高级技巧与最佳实践',
    summary: '深入探讨TypeScript的高级类型系统，包括泛型、条件类型、映射类型等，以及在实际项目中的最佳实践...',
    cover: 'https://picsum.photos/300/120?random=2',
    date: '2024-05-28',
    tags: ['TypeScript', '前端', '开发工具'],
    views: 89,
    comments: 12,
  },
  {
    id: 3,
    title: 'Node.js 性能优化完全指南',
    summary: '从内存管理、事件循环、数据库连接池等多个维度，全面介绍Node.js应用的性能优化策略和实践方法...',
    cover: 'https://picsum.photos/300/120?random=3',
    date: '2024-05-25',
    tags: ['Node.js', '后端', '性能优化'],
    views: 156,
    comments: 8,
  },
  {
    id: 4,
    title: '前端工程化：从零搭建现代化开发环境',
    summary: '详细介绍如何搭建一个完整的前端工程化开发环境，包括构建工具、代码规范、测试框架、CI/CD等...',
    cover: 'https://picsum.photos/300/120?random=4',
    date: '2024-05-22',
    tags: ['工程化', '前端', 'DevOps'],
    views: 203,
    comments: 15,
  },
];

const ArticleList: React.FC = () => (
  <div className="article-list-container">
    <List
      itemLayout="vertical"
      dataSource={articles}
      renderItem={item => (
        <Card className="article-card" key={item.id}>
          {item.cover && (
            <div className="article-cover">
              <img alt="article cover" src={item.cover} />
            </div>
          )}
          
          <div className="article-content">
            <h3 className="article-title">
              <a href={`/article/${item.id}`}>{item.title}</a>
            </h3>
            
            <div className="article-meta">
              <span className="article-date">
                <CalendarOutlined /> {item.date}
              </span>
              <div className="article-tags">
                {item.tags.map(tag => (
                  <Tag key={tag} className="article-tag">{tag}</Tag>
                ))}
              </div>
            </div>
            
            <p className="article-summary">{item.summary}</p>
            
            <div className="article-footer">
              <div className="article-stats">
                <span className="stat-item">
                  <EyeOutlined /> {item.views}
                </span>
                <span className="stat-item">
                  <MessageOutlined /> {item.comments}
                </span>
              </div>
              <Button type="primary" href={`/article/${item.id}`} className="read-more-btn">
                阅读全文
              </Button>
            </div>
          </div>
        </Card>
      )}
    />
  </div>
);

export default ArticleList;