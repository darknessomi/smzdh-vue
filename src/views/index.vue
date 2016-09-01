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
    img{
        width: 150px;
    }
</style>
<template>
    <div class="container">
        <h2>
            <img src="../images/logo.png">
        </h2>
        <h1>
            什么值得黑
        </h1>
        <div class="row">
            <a v-link="'/signin'" class="col s2 offset-s3 waves-effect waves-light btn">登录</a>
            <a v-link="'/signup'" class="col s2 offset-s2 waves-effect waves-light btn">注册</a>
        </div>
        <h2 v-time></h2>
    </div>
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
