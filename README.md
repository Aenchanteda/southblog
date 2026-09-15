# 南边小站

一个基于 Astro、TypeScript、MDX Content Collections 的中文友好个人静态博客。适合发布博客文章与学习心得，可通过 GitHub 导入 Vercel 部署。

## 技术栈

- Astro
- TypeScript
- MDX
- Astro Content Collections

## 本地开发

```bash
npm install
npm run dev
```

开发服务器启动后，按终端提示打开本地地址。

## 构建

```bash
npm run build
```

构建产物会生成到 `dist/` 目录。

## 内容结构

文章内容位于：

```text
src/content/blog/   # 博客
src/content/notes/  # 学习心得
```

每篇文章使用 Markdown 或 MDX，并包含以下 frontmatter：

```md
---
title: "文章标题"
description: "文章摘要"
pubDate: 2026-09-15
tags: ["标签一", "标签二"]
draft: false
---

这里开始写正文。
```

字段说明：

- `title`：文章标题，必填
- `description`：文章摘要，必填
- `pubDate`：发布日期，必填
- `tags`：标签数组，可选
- `draft`：是否为草稿，可选；设为 `true` 时不会显示在列表和详情路由中

## 新增博客文章

在 `src/content/blog/` 下创建一个 `.md` 或 `.mdx` 文件，例如：

```text
src/content/blog/my-new-post.mdx
```

文件名会成为文章 URL 的一部分，例如 `/blog/my-new-post`。

## 新增学习心得

在 `src/content/notes/` 下创建一个 `.md` 或 `.mdx` 文件，例如：

```text
src/content/notes/my-learning-note.mdx
```

文件名会成为文章 URL 的一部分，例如 `/notes/my-learning-note`。

## 修改站点信息

站点名称、作者、描述和导航集中在：

```text
src/site.config.ts
```

默认站点名为「南边小站」，英文备用名为「South Blog」。部署前建议把 `author` 改成你的名字或昵称。

## Vercel 部署

通过 Vercel 导入 GitHub 仓库即可部署：

- Root Directory：`.`
- Framework Preset：`Astro`
- Install Command：`npm install`
- Build Command：`npm run build`
- Output Directory：`dist`

本项目没有写入线上域名，部署后的域名由 Vercel 项目设置决定。
