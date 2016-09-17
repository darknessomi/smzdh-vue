<template>
    <div class="container">
        <div>
            {{ post.title }}
            {{ post.content }}
            {{ post.author }}
            {{ post.created}}
        </div>
        <div v-for="comment in comments">
            {{ comment.content }}
            {{ comment.created }}
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                post:null
            }
        },
        ready () {
        },
        beforeDestroy () {},
        created () {
            this.fetchPost();
            this.fetchComment();
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
            fetchComment () {
                this.$http.get('/api/comment?post_id=' + this.$route.params.post_id).then((response) => {
                    if (response.status == 200 && response.ok) {
                        this.comment = JSON.parse(response.body).comments;
                    } else {
                        alert("test");
                    }                    
                },(response) => {
                    alert("test")
                });
            }
        }
    }
</script>