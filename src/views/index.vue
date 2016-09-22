<style scoped>
    h1 {
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    
    h2 {
        text-align: center;
        font-size: 20px;
        margin-top: 50px;
    }
    
    img {
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
            <a v-link="'/posts'" class="col s2 offset-s5 waves-effect waves-light btn">主题列表</a>
        </div>
        <div v-if="loaded">
            <div class="row" v-if="login">
                <h1>{{ username }}</h1>
                <a v-on:click="logout" class="col s2 offset-s5 waves-effect waves-light btn">登出</a>
            </div>
            <div class="row" v-else>
                <a v-link="'/signin'" class="col s2 offset-s3 waves-effect waves-light btn">登录</a>
                <a v-link="'/signup'" class="col s2 offset-s2 waves-effect waves-light btn">注册</a>
            </div>
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
                login: false,
                username: "",
                loaded:false,
            }
        },
        created () {
            this.$http.get('/api/user/self').then((response) => {
                console.log(response);
                if (response.status == 200 && response.ok) {
                    this.login = true;
                    console.log(JSON.parse(response.body));
                    this.username = JSON.parse(response.body).username;
                    this.loaded = true;
                }
            }, (response) => {
                console.log(response);
                // error callback
                // alert(JSON.parse(response.body).error)
            });
        },
        ready () {
        },
        beforeDestroy () {

        },
        methods: {
            logout: function (event) {
                this.$http.get('/api/logout').then((response) => {
                    console.log(response);
                    if (response.status == 200 && response.ok) {
                        alert("登出成功");
                        this.login = false;
                    } else {
                        alert("登出错误");
                    }
                }, (response) => {
                    console.log(response);
                    // error callback
                    alert("登出错误");
                });

            }
        }
    }
</script>