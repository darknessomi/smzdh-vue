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
            登陆
        </h1>
        <div class="row">
            <input class="col s6 offset-s3" type="text" v-model="username" placeholder="username">
            <input class="col s6 offset-s3" type="password" v-model="password" placeholder="password">
            <div><button class="waves-effect waves-light btn" v-on:click="signin">登陆</button></div>
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
                password: ''
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
                            alert("登陆成功")
                            this.$router.go("/")
                        } else {
                            alert('请检查用户名密码是否正确')
                        }
                    }, (response) => {
                        console.log(response)
                        // error callback
                        alert(JSON.parse(response.body).error)
                    });
                } else {
                    alert('请检查用户名密码是否正确')
                }
            }
        }
    }
</script>
