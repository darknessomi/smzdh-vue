
<template>
    <div class="container">
        <a v-link="'/post/new'">创建新主题</a>
        <div class="row" v-for="post in posts">
            <a v-link="'/post/' + this.post.id">{{ post.title }}</a>
            {{ post.author.username }}
            {{ post.created}}
        </div>
    </div>
</template>
<script>
    
    export default {
        data () {
            return {
                posts:[],
                category:null
            }
        },
        ready () {
        },
        beforeDestroy () {},
        created () {
            this.fetchData();
        },
        methods: {
            fetchData: function() {
                this.$http.get('/api/post?').then((response) => {
                    console.log(response);
                    if (response.status == 200 && response.ok) {
                        console.log(response.body);
                        this.posts = JSON.parse(response.body).posts;
                    } else {
                        alert("test");
                    }
                }, (response) => {
                    console.log(response);
                    alert("test");
                });
            }
        }
    }
</script>