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
    <div><button v-on:click="register">登陆</button></div>
</template>
<script>
    import md5 from 'blueimp-md5';
    
    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            register: function (event) {
                let useinfo = {
                    username: this.username,
                    password: md5(this.password)
                };
                this.$http.post('http://localhost:8008/api/signin', useinfo).then((response) => {
                    console.log(response)
                    if (response.status == 200 && response.ok) {
                        alert("登陆成功")
                    } else {
                        alert("登陆错误")
                    }
                }, (response) => {
                    console.log(response)
                    // error callback
                    alert("登陆错误")
                });

            }
        }
    }
</script>
