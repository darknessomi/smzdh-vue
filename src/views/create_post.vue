<style scoped>
    h1 {
        color: #000;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
    }
    
    input {
        width: 30%;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        margin-top: 20px;
        margin-right: 35%;
        margin-left: 35%;
    }
    
    div button {
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
            创建新主题
        </h1>
        <div class="row">
            <input class="col s6 offset-s3" type="text" v-model="title" placeholder="标题">
            <div class="row">
                <div class="input-field col s12">
                    <textarea class="col s6 offset-s3 materialize-textarea" type="text" v-model="content"></textarea>
                </div>
            </div>
            <div class="input-field col s12">
            <input-field class="s6" label="name">
            <v-select v-model="category_id">
                <v-option v-for="category in categorys" v-bind:value="category.id">{{ category.name }}</v-option>
            </v-select>
            </input-field>
            </div>
            <div><button class="waves-effect waves-light btn" v-on:click="createPost">创建</button></div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data () {
            return {
                title: '',
                content: '',
                categorys:[],
                category_id:1
            }
        },
        ready () {
            this.$http.get('/api/category').then((response) => {
                if (response.status === 200 && response.ok) {
                     this.categorys = JSON.parse(response.body).category
                } else {
                     alert(response.body.error);
                }
            })
        },
        beforeDestroy () {

        },
        methods: {
            createPost: function(event) {
                if (this.title.length>5) {
                    let post = {
                        title:this.title,
                        content:this.content,
                        category_id:this.category_id
                    };
                    console.log(post);
                    this.$http.post('/api/post',post).then((response) => {
                        if (response.status === 200 && response.ok) {
                            this.$route.router.go('/post/'+JSON.parse(response.body).post_id);
                        } else {
                            alert(response.body.error);
                        }
                    });
                } else {
                    alert("title 至少需要五个字符。")
                }
            }
        }
    }
</script>
