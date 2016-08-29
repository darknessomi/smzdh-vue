<style scoped>
    h1{
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
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
        登出
    </h1>
    <div><button v-on:click="logout">登出</button></div>
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
            logout: function (event) {
                this.$http.get('/api/logout').then((response) => {
                    console.log(response)
                    if (response.status == 200 && response.ok) {
                        alert("登出成功")
                    } else {
                        alert("登出错误")
                    }
                }, (response) => {
                    console.log(response)
                    // error callback
                    alert("登出错误")
                });

            }
        }
    }
</script>
