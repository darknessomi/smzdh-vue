<template>
    <div class="container">
        <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.author.username }}</p>
            <span>{{ post.created}}</span>
            <p>{{ post.content }}</p>
        </div>
        <div class="row">
            <h3>评论</h3>
        </div>
        <div v-for="comment in comments">
            <div class="row">
                <p>{{ comment.author.username }}</p>
           <p> {{ comment.content }}</p>
           <p>{{ comment.created }}</p>
            </div>
        </div>
        <div class="row">
            <input v-model="comment">
            <button v-on:click="createComment">评论</button>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                post:null,
                comments:null,
                comment:""
            }
        },
        ready () {
        },
        beforeDestroy () {},
        created () {
            this.fetchPost();
            this.fetchComments();
        },
        methods: {
            fetchPost () {
                this.$http.get('/api/post/'+ this.$route.params.post_id).then((response) => {
                    if (response.status == 200 && response.ok) {
                        this.post = JSON.parse(response.body);
                    } else {
                        alert("test");
                    }
                }, (response) => {
                    alert("test");
                });
            },
            fetchComments () {
                this.$http.get('/api/comment?post_id=' + this.$route.params.post_id).then((response) => {
                    if (response.status == 200 && response.ok) {
                        this.comments = JSON.parse(response.body).comments;
                    } else {
                        alert("test");
                    }                    
                },(response) => {
                    alert("test");
                });
            },
            createComment () {
                if (this.comment === "") {
                    alert("输入为空.");
                    return;
                }
                this.$http.post('/api/comment',{content:this.comment,post_id:Number(this.$route.params.post_id)})
                .then((response) => {
                    if (response.status == 200 && response.ok) {
                        this.comment = "";
                        this.fetchComments();
                    } else {
                        alert("test");
                    }
                },(response) => {
                    alert("test");
                });
            }
        }
    }
</script>