### Vue3+TS 仿知乎项目

写一个项目进行 vue3 及 TS 的进一步学习

安装 bootstrap：

```base
npm install bootstrap@next --save
```

##### 全局 Loading 新思路：

之前想法：
在每个页面上通过发送请求的数据的有无来实现 loading 效果。。。
现在想法：
在 axios 中使用请求拦截和响应拦截，当请求拦截时向 store 中发送 loading 的函数，值为 true，在响应拦截中发送 loading 的函数，值为 false，这样可以在 store 中设置全局的 loading（true/false）,然后每个页面引入 store 中 state 中的 loading 的值，如果为 true 就出现加载动画，如果为 false 就关闭加载动画，这是还有一个细节就是在发送请求前判断是否有值，如果有值就不发送请求，这样既能减少性能消耗也能防止每跳转一次页面 loading 动画出现一次
