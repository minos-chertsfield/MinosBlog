import { DataNode } from "antd/es/tree";
import { DownOutlined, RightOutlined, FolderOutlined, FileOutlined } from '@ant-design/icons';

// 分类数据结构
export const categoryData: DataNode[] = [
  {
    title: '前端',
    key: 'frontend',
    icon: <FolderOutlined />,
    children: [
      {
        title: 'React',
        key: 'react',
        icon: <FileOutlined />,
        children: [
          { title: 'React Hooks', key: 'react-hooks', icon: <FileOutlined /> },
          { title: 'React Router', key: 'react-router', icon: <FileOutlined /> },
          { title: 'React状态管理', key: 'react-state', icon: <FileOutlined /> },
        ],
      },
      {
        title: 'Vue',
        key: 'vue',
        icon: <FileOutlined />,
        children: [
          { title: 'Vue3组合式API', key: 'vue3-composition', icon: <FileOutlined /> },
          { title: 'Vue生态系统', key: 'vue-ecosystem', icon: <FileOutlined /> },
        ],
      },
      {
        title: 'JavaScript',
        key: 'javascript',
        icon: <FileOutlined />,
        children: [
          { title: 'ES6+特性', key: 'es6-features', icon: <FileOutlined /> },
          { title: '异步编程', key: 'async-programming', icon: <FileOutlined /> },
        ],
      },
    ],
  },
  {
    title: '后端',
    key: 'backend',
    icon: <FolderOutlined />,
    children: [
      {
        title: 'Node.js',
        key: 'nodejs',
        icon: <FileOutlined />,
        children: [
          { title: 'Express框架', key: 'express', icon: <FileOutlined /> },
          { title: 'Koa框架', key: 'koa', icon: <FileOutlined /> },
        ],
      },
      {
        title: 'Python',
        key: 'python',
        icon: <FileOutlined />,
        children: [
          { title: 'Django', key: 'django', icon: <FileOutlined /> },
          { title: 'FastAPI', key: 'fastapi', icon: <FileOutlined /> },
        ],
      },
    ],
  },
  {
    title: '算法',
    key: 'algorithm',
    icon: <FolderOutlined />,
    children: [
      {
        title: '数据结构',
        key: 'data-structure',
        icon: <FileOutlined />,
        children: [
          { title: '数组和链表', key: 'array-linkedlist', icon: <FileOutlined /> },
          { title: '树和图', key: 'tree-graph', icon: <FileOutlined /> },
        ],
      },
      {
        title: '算法思想',
        key: 'algorithm-thinking',
        icon: <FileOutlined />,
        children: [
          { title: '动态规划', key: 'dynamic-programming', icon: <FileOutlined /> },
          { title: '回溯算法', key: 'backtracking', icon: <FileOutlined /> },
        ],
      },
    ],
  },
  {
    title: '随笔',
    key: 'essay',
    icon: <FolderOutlined />,
    children: [
      {
        title: '技术感悟',
        key: 'tech-thoughts',
        icon: <FileOutlined />,
      },
      {
        title: '生活随笔',
        key: 'life-essay',
        icon: <FileOutlined />,
      },
    ],
  },
];

// 标签数据结构
export const tagData = ['React', 'Vue', 'Node.js', 'TypeScript', 'Python', 'JavaScript', 'CSS', 'HTML', 'AI', '算法', '数据结构', '生活'];

// 文章数据结构
export const articleData = [
  { title: 'React Hooks深度解析', date: '2024-01-15' },
  { title: 'TypeScript最佳实践', date: '2024-01-12' },
  { title: 'Node.js性能优化指南', date: '2024-01-10' }
]

// 友情链接数据结构
export const friendLinkData = [
  { name: 'Ant Design', url: 'https://ant.design' },
  { name: 'React官网', url: 'https://react.dev' },
  { name: 'MDN文档', url: 'https://developer.mozilla.org' }
]