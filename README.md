# ng2-loader (forked from [vue-loader](https://github.com/vuejs/vue-loader))

> Angular2 component loader for [Webpack](http://webpack.github.io).

**WORK IN PROGRESS!** Do not use

It allows you to write your components in this format:

```html
<template>
    <h1>Hello World</h1>
</template>

<script>
    import {Component} from 'angular2/core';

    @Component({
        selector: 'hello-world'
    })
    export default class{}
</script>

<style>
    :host{
        display: block;
        text-align: center;
        color: blue;
    }
</style>
```
