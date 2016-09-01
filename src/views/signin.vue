<style scoped>
    h1{
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    input{
        width: 30%;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ccc;
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        margin-right: 35%;
        margin-left: 35%;
    }
    div button{
        width: 30%;
        height: 30px;
        line-height: 20px;
        background-color: #ccc;
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        margin-right: 35%;
        margin-left: 35%;
    }
</style>
<template>
    <h1>
        登陆
    </h1>
    <input type="text" v-model="username" placeholder="username">
    <input type="password" v-model="password" placeholder="password">
    <alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
      <span class="icon-info-circled alert-icon-float-left"></span>
      <strong>登陆错误</strong>
      <p>{{ message }}</p>
    </alert>
    <div><button v-on:click="signin">登陆</button></div>
</template>
<script>
    import md5 from 'blueimp-md5';
    import { alert } from 'vue-strap'

    export default {
        components: {
            alert,
        },
        data () {
            return {
                username: '',
                password: '',
                showTop: false,
                message: ''
            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            signin: function (event) {
                if (this.username.length > 0 && this.password.length > 0) {
                    let useinfo = {
                        username: this.username,
                        password: md5(this.password)
                    };
                    this.$http.post('/api/signin', useinfo).then((response) => {
                        console.log(response)
                        if (response.status == 200 && response.ok) {
                            window.alert("登陆成功")
                        } else {
                            this.message = '请检查用户名密码是否正确'
                            this.showTop = true
                        }
                    }, (response) => {
                        console.log(response)
                        // error callback
                        this.message = JSON.parse(response.body).error
                        this.showTop = true
                    });
                } else {
                    this.message = '请检查用户名密码是否正确'
                    this.showTop = true
                }
            }
        }
    }
</script>
