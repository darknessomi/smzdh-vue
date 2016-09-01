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
        注册
    </h1>
    <input type="email" v-model="email" placeholder="email">
    <input type="text" v-model="username" placeholder="username">
    <input type="password" v-model="password" placeholder="password">
    <alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
      <span class="icon-info-circled alert-icon-float-left"></span>
      <strong>注册错误</strong>
      <p>{{ message }}</p>
    </alert>
    <div><button v-on:click="register">注册</button></div>
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
                email: '',
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
            register: function (event) {
                if (this.email.length > 0 && this.username.length > 0 && this.password.length > 0) {
                    let useinfo = {
                        email: this.email,
                        username: this.username,
                        password: md5(this.password)
                    };
                    this.$http.post('/api/signup', useinfo).then((response) => {
                        console.log(response)
                        if (response.status == 200 && response.ok) {
                            window.alert("注册成功")
                        }
                    }, (response) => {
                        console.log(response)
                        // error callback
                        this.message = JSON.parse(response.body).error
                        this.showTop = true
                    });
                } else {
                    this.message = '请检查输入信息是否正确'
                    this.showTop = true
                }
            }
        }
    }
</script>
