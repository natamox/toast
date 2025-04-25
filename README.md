# 🧩 Toast 组件实现挑战

## 背景

在企业项目中，Toast（轻提示）组件是非常常见的 UI 反馈组件，用于在用户操作后给予及时反馈。请实现一个功能完善的 Toast 组件，并支持以下进阶功能。

## 要求

请使用 React 或 Vue（任选其一或均实现），使用 TypeScript 编写一个 Toast 通知组件。

### 基础功能

- ✅ 支持四种类型：success、error、info、warning，展示不同背景色
- ✅ 支持手动关闭
- ✅ 自动消失（默认 3 秒）

### 进阶功能

- ✅ 支持通过 position 参数设置 Toast 出现的位置，包含以下几种：
  - top-left
  - top-right
  - top-center
  - bottom-left
  - bottom-right
  - bottom-center
- ✅ 相同内容的 Toast 在 2 秒内重复调用不再展示（防抖）
- ✅ 最多同时展示 3 条 Toast，如果超过 3 条，则放入等待队列，等已有的 Toast 消失后再展示
