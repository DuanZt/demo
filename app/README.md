# src

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

生产模式需修改src/config 里面的path,baseURL(api)。 以及config/index.js build 里面的assetsPublicPath （静态文件根目录url绝对路径）。 以及dist/.htaccess 里面的路径配置
当前这几个地方的build配置仅供测试使用，使得build之后可以在http://localhost/demo/app/dist/作为根目录访问！！！