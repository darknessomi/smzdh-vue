<style scoped>
    h1{
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
</style>
<template>
    <h1>
        验证您的邮箱
    </h1>
    <h1>{{ messages }}</h1>
</template>
<script>
    import md5 from 'blueimp-md5';
    
    export default {
        data () {
            return {
                messages: "验证中"
            }
        },
        ready () {
            console.log(this.$route.params.token)
            this.$http.get('/api/verify_email/' + this.$route.params.token).then((response) => {
                console.log(response)
                if (response.status == 200 && response.ok) {
                    this.messages = "验证成功";
                    window.setTimeout( ()=>{
                        this.$router.go("/")
                    }, 1000);
                } else {
                    this.messages = "验证错误";
                }
            }, (response) => {
                console.log(response)
                // error callback
                this.message = "验证错误";
            });
        },
        beforeDestroy () {

        },
        methods: {
        }
    }
</script>
