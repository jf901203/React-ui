
## React-ui库

1. https://mobile.ant.design/docs/react/use-with-create-react-app-cn
2. 写一下标签
3. 传一些属性
4. 效果就出来了
5. 这就是ui组件

## React-ui

1. material-ui(国外)
2. ant-design (国内蚂蚁金服)
3. https://ant.design/index-cn pc端
4. https://mobile.ant.design/index-cn 移动端


## 解决300ms秒点击延迟事件 用上这个库之后能让点击没有300ms的延迟

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
	  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
	  <script>
	    if ('addEventListener' in document) {
	      document.addEventListener('DOMContentLoaded', function() {
	        FastClick.attach(document.body);
	      }, false);
	    }
	    if(!window.Promise) {
	      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
	    }
	  </script>

## 使用组件库 有标签式组件和API组件

1. 组件库中有很多组件 antd-mobile 大的组件库 向外暴露很多属性 每一个属性就是一个组件
2. import { Button,Toast} from 'antd-mobile' 
3. antd-mobile 整个库都引入了

## 引入整个样式文件 全局引入

1. import 'antd-mobile/dist/antd-mobile.css';


## 按需打包组件(按需加载) 实现按需打包(js/css)

1.  下载依赖包
2.  npm install babel-plugin-import --save-dev
3.  npm install react-app-rewired  --save-dev
4.  npm install react-app-rewired customize-cra --save-dev
4.  修改配置

	"scripts": {
		-   "start": "react-scripts start",
		+   "start": "react-app-rewired start",
		-   "build": "react-scripts build",
		+   "build": "react-app-rewired build",
		-   "test": "react-scripts test --env=jsdom",
		+   "test": "react-app-rewired test --env=jsdom",
		}



5. config-overrides.js 创建根目录文件

	const { override, fixBabelImports } = require('customize-cra');
	
	module.exports = override(
	  fixBabelImports('import', {
	    libraryName: 'antd-mobile',
	    style: 'css',
	  }),
	);

## 引入的这些标签

1. 跟html标签出不多
2. 写标签传递一些属性
3. 写组件标签样式传递属性
4. 每一个组件标签都可以接收一些属性