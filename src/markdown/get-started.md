# 开始使用

请先<a id="mb-a" href="#/doc/install">安装</a>本组件库。

然后在你的代码中写入下面的代码：

```js
import {Switch, Button, Dialog,openDialog, Tabs, Tab} from "hugsy-ui-1"
```

就可以使用 Hugsy UI 提供的组件了。

## Vue 单文件组件

代码示例：

```vue
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
import {Switch, Button, Dialog,openDialog, Tabs, Tab} from "hugsy-ui-1"
  export default {
    components: {Button}
  }
</script>
```