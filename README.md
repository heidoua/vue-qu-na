# vue仿去哪网
从Vue基础语法入手，逐层递进，项目贴近企业流程，完全按照企业级别代码质量和工程开发流程进行，让你理解这套技术在企业中被使用的真实流程。更好的掌握Vue各个基础知识点。包括Vue中的CSS动画原理、Vue中使用animate.css库、Vue中同时使用过渡与动画效果、Vue中使用Velocity.js库、Vue中多组件和列表过度 、Vue中动画的封装、vuex等等

### MVVM模式

传统开发中前端通常使用MVP设计模式

![MVP](https://github.com/fangfeiyue/vue-qu-na/blob/master/image/chuantong.png)

在这种设计模式下我们通常把代码分为三层，M层是数据层，V层是是视图层一般指的是数据展示，P层是控制层,下面是一个简单的MVP模式对应的前端代码

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TodoList</title>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
</head>
<body>
     <div>
         <input id="input" type="text">
         <button id="btn">提交</button>
         <ul id="list">
         </ul>
     </div>
     <script>
         function Page(){
              
         }
         $.extend(Page.prototype, {
             init: function(){
                 this.bindEvents();
             },
             bindEvents: function(){
                 var btn = $('#btn');
                 btn.on('click', $.proxy(this.handleBtnClick, this));
             },
             handleBtnClick: function(){
                 var inputElem = $('#input');
                 var inputValue = inputElem.val();
                 var ulElem = $('#list');
                 ulElem.append('<li>' + inputValue + '</li>');
             }
         });

         var page = new Page();
         page.init();
     </script>
</body>
</html>
```
这个例子因为没有请求接口，所以弱化了M数据层。div里面是V层，script标签里的操作Dom的是P层，当我们点击页面按钮提交时会执行P层的代码，更新页面。P层相当于M和V层的中转站，P层中的很大一份代码都是在做DOM的操作。而前端存在大量操作DOM的行为会严重影响页面性能。

下图是vue中MVVM模式的示意图

![MVP](https://github.com/fangfeiyue/vue-qu-na/blob/master/image/mvvm.png)

MVVM模式中也有视图层V和数据层M，但是没有P层取而代之的ViewModel层，从上图我们也可以看出VM层是vue自己带的，由此可以看出在使用MVVM进行开发Dom的操作被极大的简化了代码量会得到显著的减少，我们只需要关注M层和V层，更多是关注的M层就可以了。

### 组件初识

Vue中组件简单来说可以分为以下两种
- 全局组件
- 局部组件。

下面我们就来写了个小demo来看看这两种组件如何使用。

先来用Vue写一个阉割版todolist，这个只能实现添加功能，代码如下：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TodoList</title>
    <script src="./vue.js"></script>
</head>
<body>
    <div id="app">
        <input type="text" v-model="inputValue">
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                list:[],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function(){
                    this.list.push(this.inputValue);
                    this.inputValue = '';
                }
            }
        });
    </script>
</body>
</html>
```
运行上述代码就实现了只带添加功能的TodoList，从运行结果看，添加的内容我们可以分装成一个组件也就是`ul`中的`li`标签。

全局组件的运用，在`script`标签中添加如下代码
```
Vue.component("TodoItem", {
    props: ['content'],
    template: "<li>{{content}}</li>"
});
```
上述代码中我们定义了一个Vue的全局组件`TodoItem`,下一步`<todo-item></todo-item>`替换`<li></li>`,注意我们定义的组件在使用的时候，字母要全部小写，大写字母转为小写后要用`-`连接，如`TodoItem`在使用时写为`todo-item`。

上述为全局组件的使用，下面我们试试局部组件。

在`script`标签中添加如下代码
```
var TodoItem = {
    props: ['content'],
    template: "<li>{{content}}</li>"
};
```
注意，此时我们还不能直接使用局部组件，局部组件要在new Vue()中通过components注册后方可使用，代码如下:
```
var app = new Vue({
    ...
    components: {
        TodoItem: TodoItem 
    }
    ...
});
```
注册完成后就可以像全局组件一样使用局部组件了。

`注意：v-bind可以缩写为:，v-on可以缩写为@。`

### 子组件向父组件传值初探

上面我们只实现了简单的添加todo，如果我们已经完成了某了todo，点击对应的todo需要删掉它，该怎么实现呢？首先我们用的是Vue，就不需要特别关注dom的操作，我们只需要处理数据即可，当我们点击某项todo，只要删除list数组中选中的项即可，数组中的数据发生了变化，页面也会跟随着变化。

首先我们分别修改html部分和js部分的代码
```
// html
<todo-list
    :index="index"
    @delete="handleItemDelete"  
>
</todo-list>

// js
var TodoList = {
    props: ['content', 'index'],
    template: "<li @click='handleItemClick'>{{content}}</li>",
    methods: {
        handleItemClick: function(){
            this.$emit("delete", this.index);
        }
    }
};

var app = new Vue({
    ...
    methods: {
        ...
        handleItemDelete: function(index){
            // 删除数组中指定索引的元素
            this.list.splice(index, 1);
        }
    }
});
```

`$emit`方法可以向外触发事件。
### 生命周期

![生命周期图示](https://github.com/fangfeiyue/vue-qu-na/blob/master/image/lifecycle.png)

