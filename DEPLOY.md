# 部署指南：将网站配置为可公开访问的链接

本指南将帮助您将此项目部署为可公开访问的网站，使任何人都能通过链接访问您的爱情纪念网页。

## 方法一：使用 GitHub Pages

GitHub Pages 是最简单的免费托管方式，适合个人项目和小型网站。

### 步骤1：安装依赖并构建项目

确保您的项目已经成功构建：

```bash
npm install
npm run build
```

构建成功后，所有文件会被打包到 `dist` 目录中。

### 步骤2：部署到 GitHub Pages

有两种方式部署到 GitHub Pages：

#### 选项A：使用 dist 目录直接部署

1. 创建一个 `.github/workflows/deploy.yml` 文件：

```bash
mkdir -p .github/workflows
touch .github/workflows/deploy.yml
```

2. 将以下内容复制到 `deploy.yml` 文件中：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. 提交并推送更改到 GitHub：

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

4. 在 GitHub 仓库的设置中启用 Pages：
   - 转到仓库的 Settings > Pages
   - 选择 `gh-pages` 分支作为来源
   - 点击 Save

#### 选项B：手动部署到 gh-pages 分支

1. 创建并切换到 gh-pages 分支：

```bash
git checkout -b gh-pages
```

2. 删除所有文件（除了 .gitignore）：

```bash
# Windows 命令
for /f "delims=" %%i in ('dir /b /a-d ^| findstr /v /i ".gitignore"') do del "%%i"
for /d %%i in (*) do if not "%%i" == ".git" rd /s /q "%%i"

# macOS/Linux 命令
find . -maxdepth 1 ! -name '.git' ! -name '.gitignore' -exec rm -rf {} +
```

3. 将 dist 目录中的文件复制到根目录：

```bash
# Windows 命令
xcopy /e /y dist\* .\

# macOS/Linux 命令
cp -r dist/* .
```

4. 提交更改并推送到 GitHub：

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. 在 GitHub 仓库的设置中启用 Pages：
   - 转到仓库的 Settings > Pages
   - 选择 `gh-pages` 分支作为来源
   - 点击 Save

### 步骤3：访问您的公开网站

GitHub Pages 通常需要几分钟时间来部署您的网站。部署完成后，您可以通过以下链接访问您的网站：

```
https://[您的GitHub用户名].github.io/[仓库名称]/
```

对于本项目，链接应该是：

```
https://ding168816.github.io/myLove/
```

## 方法二：使用 Netlify 或 Vercel 部署

如果您想要更多自定义选项和更快的访问速度，可以使用 Netlify 或 Vercel 等平台。

### 使用 Netlify 部署

1. 访问 [Netlify](https://www.netlify.com/) 并登录
2. 点击 "New site from Git"
3. 选择您的 GitHub 仓库
4. 设置构建命令为 `npm run build`，发布目录为 `dist`
5. 点击 "Deploy site"

### 使用 Vercel 部署

1. 访问 [Vercel](https://vercel.com/) 并登录
2. 点击 "New Project"
3. 导入您的 GitHub 仓库
4. Vercel 会自动检测 Vite 项目配置
5. 点击 "Deploy"

## 自定义域名（可选）

如果您拥有自己的域名，可以将其配置到您的网站上：
- GitHub Pages: 在 Settings > Pages > Custom domain 中设置
- Netlify: 在 Domain settings 中设置
- Vercel: 在 Domains 中设置

## 部署脚本

为了简化部署过程，我已经在 package.json 中添加了部署脚本。您可以使用以下命令快速部署：

```bash
npm run deploy
```

祝您的爱情纪念网页获得更多的祝福！❤️