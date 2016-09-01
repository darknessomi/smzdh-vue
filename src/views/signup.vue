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
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        margin-right: 35%;
        margin-left: 35%;
    }
</style>
<template>
    <div class="container">
        <h1>
            注册
        </h1>
        <div class="row">
            <input class="col s6 offset-s3" type="email" v-model="email" placeholder="email">
            <input class="col s6 offset-s3" type="text" v-model="username" placeholder="username">
            <input class="col s6 offset-s3" type="password" v-model="password" placeholder="password">
            <div><button class="waves-effect waves-light btn" v-on:click="register">注册</button></div>
        </div>
    </div>
</template>
<script>
    import md5 from 'blueimp-md5';

    export default {
        components: {

        },
        data () {
            return {
                username: '',
                email: '',
                password: '',
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
                            alert("注册成功")
                        }
                    }, (response) => {
                        console.log(response)
                        // error callback
                        alert(JSON.parse(response.body).error)
                    });
                } else {
                    alert('请检查输入信息是否正确')
                }
            }
        }
    }
</script>
