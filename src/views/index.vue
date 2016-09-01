<style scoped>
    h1{
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    h2{
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
    }
    .button-container {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    img{
        width: 150px;
    }
</style>
<template>
    <h2>
        <img src="../images/logo.png">
    </h2>
    <h1>
        什么值得黑
    </h1>
    <div class="col-xs-12 button-container">
        <button v-link="'/signin'" class="btn btn-success col-xs-offset-3 col-xs-2">登录</button>
        <button v-link="'/signup'" class="btn btn-info col-xs-offset-2 col-xs-2">注册</button>
    </div>
    <h2 v-time></h2>
</template>
<script>
    import NumberSeparator from '../filters/number-separator';
    import Time from '../directives/time';

    export default {
        filters: {
            NumberSeparator
        },
        directives: {
            time: Time
        },
        data () {
            return {

            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            
        }
    }
</script>
