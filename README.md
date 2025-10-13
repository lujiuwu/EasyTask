# EasyTask - 定时任务管理系统

<p>less task, more fun!</p>
一个基于 Vue 3 + Vuetify 3 构建的现代化任务管理应用，提供直观的任务创建、管理和跟踪功能。

## ✨ 功能特性

### 🎯 核心功能
- **任务管理**：创建、编辑、删除任务
- **子任务支持**：为每个任务添加多个子任务项
- **任务分类**：支持普通任务、计划任务、重要任务、日常任务、工作任务
- **状态跟踪**：任务完成状态管理
- **标签系统**：为任务添加彩色标签和图标
- **搜索功能**：快速搜索和筛选任务
- **多种视图**：列表视图和瀑布流视图

### 🎨 界面特性
- **响应式设计**：适配各种屏幕尺寸
- **主题切换**：支持明暗主题切换
- **固定工具栏**：顶部工具栏固定，方便操作
- **粘性标题**：页面标题在滚动时保持可见
- **现代化 UI**：基于 Vuetify 3 的美观界面

### 🔧 技术特性
- **表单验证**：使用 VeeValidate + Zod 进行数据验证
- **状态管理**：Pinia 状态管理
- **类型安全**：TypeScript 全面支持
- **组件化**：模块化组件设计
- **路由管理**：Vue Router 单页应用路由

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm/yarn/pnpm/bun

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install

# 使用 bun
bun install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用

### 构建生产版本

```bash
# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build
# 或
bun build
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── AddTaskButton/   # 添加任务按钮
│   ├── DataList/        # 数据列表组件
│   │   ├── NormalList/  # 普通列表视图
│   │   └── WaterFall/   # 瀑布流视图
│   ├── FooterBar/       # 底部栏
│   └── ToolBar/         # 顶部工具栏
├── pages/               # 页面组件
│   ├── tasks/           # 任务相关页面
│   │   ├── add/         # 添加任务页面
│   │   └── [id]/        # 任务详情页面
│   └── setting/         # 设置页面
├── stores/              # Pinia 状态管理
├── types/               # TypeScript 类型定义
├── enum/                # 枚举定义
├── layouts/             # 布局组件
└── utils/               # 工具函数
```

## 🎯 任务类型

- **普通任务** (`NORMAL`)：常规任务
- **计划任务** (`SCHEDULE`)：需要按计划执行的任务
- **重要任务** (`IMPORTANT`)：高优先级任务
- **日常任务** (`DAILY`)：日常重复任务
- **工作任务** (`WORK`)：工作相关任务

## 🏷️ 任务状态

- **未完成** (`UNFINISHED`)：任务进行中
- **已完成** (`FINISHED`)：任务已完成

## 🛠️ 技术栈

### 前端框架
- **Vue 3** - 渐进式 JavaScript 框架
- **Vuetify 3** - Material Design 组件库
- **TypeScript** - 类型安全的 JavaScript

### 状态管理
- **Pinia** - Vue 3 状态管理库

### 路由
- **Vue Router** - Vue.js 官方路由管理器

### 表单处理
- **VeeValidate** - Vue 表单验证库
- **Zod** - TypeScript 优先的模式验证库

### 构建工具
- **Vite** - 下一代前端构建工具
- **UnoCSS** - 即时原子化 CSS 引擎

### 开发工具
- **ESLint** - 代码质量检查工具
- **Vue TSC** - Vue 组件类型检查

## 📱 使用说明

### 创建任务
1. 点击右下角的添加任务按钮
2. 填写任务名称（至少3个字符）
3. 选择任务类型
4. 添加子任务项（可选）
5. 添加标签（可选）
6. 点击提交保存

### 管理任务
- **查看任务**：在主页浏览所有任务
- **搜索任务**：使用顶部搜索框快速查找
- **筛选任务**：使用工具栏筛选按钮按状态筛选
- **切换视图**：在列表视图和瀑布流视图间切换
- **主题切换**：使用工具栏主题按钮切换明暗主题

### 子任务管理
- 为每个任务添加多个子任务项
- 标记子任务完成状态
- 添加完成时间和备注

## 🎨 自定义配置

### 主题配置
应用支持明暗主题切换，主题配置存储在 Pinia store 中。

### 布局模式
- **列表模式**：传统的列表布局
- **瀑布流模式**：卡片式瀑布流布局

### 任务筛选
- 全部任务
- 未完成任务
- 已完成任务

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目基于 [MIT](http://opensource.org/licenses/MIT) 许可证开源。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vuetify](https://vuetifyjs.com/) - Material Design 组件库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理库
- [VeeValidate](https://vee-validate.logaretm.com/) - Vue 表单验证库
