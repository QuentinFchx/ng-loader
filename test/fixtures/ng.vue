<template id="hello-world">
    <h1>Hello World</h1>
</template>

<script>
    import {Component} from '@angular/core'

    @Component({
        selector: 'hello-world'
    })
    export default class{
    }
</script>

<style>
    :host{
        display: block;
        text-align: center;
        color: blue;
    }
</style>
