<style scoped>
    h1{
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    input{
        width: 20%;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ccc;
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        margin-right: 40%;
        margin-left: 40%;
    }
    div button{
        width: 20%;
        height: 30px;
        line-height: 20px;
        background-color: #ccc;
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        margin-right: 40%;
        margin-left: 40%;
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
      <p>请检查用户名密码是否正确</p>
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
                showTop: false
            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            signin: function (event) {
                let useinfo = {
                    username: this.username,
                    password: md5(this.password)
                };
                this.$http.post('/api/signin', useinfo).then((response) => {
                    console.log(response)
                    console.log(this.show)
                    if (response.status == 200 && response.ok) {
                        alert("登陆成功")
                    } else {
                        this.showTop = true
                    }
                }, (response) => {
                    console.log(response)
                    // error callback
                    this.showTop = true
                });

            }
        }
    }
</script>
