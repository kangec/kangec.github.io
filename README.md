# 浅墨漫芳华的个人空间

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) [![standard-readme compliant](https://api.travis-ci.org/kangec/kangec.github.io.svg?branch=blog)](https://www.travis-ci.org/github/kangec/kangec.github.io) 

<a href="https://www.ardien.xyz/" target="_blank" rel="noopener noreferrer"><img src="https://i.loli.net/2020/08/01/FhVtpid91KqDN3T.png"></a>

## 背景

开始是坚持，后来是习惯，接着喜欢。以后当有人对你说，「你写那么多有用的东西，你真的很厉害啊！」你可以笑而不语，也可以大声说道：「你妹，你不知道我开始的时候多么痛苦！」

## 安装

```shell
# clone the project
git clone https://github.com/kangec/kangec.github.io.git

# enter the project directory
cd kangec.github.io

# install dependency
npm install # or yarn install
```

## 目录结构

```html
.
├── docs (必须，不要修改文件夹名称)
│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）
│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)
│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)
│   ├── <结构化目录> 
│   └── index.md (首页)
├── utils  (可选，vdoing主题使用的node工具)
│   ├── modules
│   ├── config.yml (可选，批量操作front matter配置)
│   ├── editFrontmatter.js (可选，批量操作front matter工具)
├── .travis.yml (可选,travis-ci/cd自动化集成部署配置)
├── .gitignore (可选，github忽略配置)
│
└── package.json
```

- `docs` 文件夹名称请不要修改
- `docs/.vuepress` 用于存放全局的配置、样式、静态资源等，同官方，查看 [详情](https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构)
- `docs/@pages` 此文件夹是自动生成的，存放分类页、标签页、归档页对应的`.md`文件，一般不需要改动
- `docs/_posts` 专门用于存放碎片化博客文章，里面的`.md`文件不需要遵循命名约定，不会生成结构化侧边栏和目录页。
- `docs/<结构化目录>` 请查看[《构建结构化站点的核心配置和约定》](https://xugaoyi.github.io/vuepress-theme-vdoing-doc/pages/33d574/)。
- `docs/index.md` 首页
- `docs/.vuepress/config.js`修改使用的主题指向这个文件。需要注意的是主题的后续维护升级只对npm主题包负责。

## 使用

1. 在本地启动服务器

   ```sh
   npm run dev # or yarn dev
   ```

2. 新增文章

   ```sh
   cd docs && echo '# Hello VuePress' > docs/README.md
   ```

3. 构建静态化站点

   ```sh
   npm run build # or yarn build
   ```

   

## API

<a href="https://vuepress.vuejs.org/zh/">VuePress Doc</a> <a href="https://xugaoyi.github.io/vuepress-theme-vdoing-doc/">Vdoing Doc</a>

## License

```markdown
MIT License

Copyright (c) 2021-present kangec

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

