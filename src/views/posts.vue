
<template>
    <div class="container">
        <div class="row" v-for="post in posts">
            <a v-link="{ name: 'post', params: { post_id: {{ post.id }} }}">{{ post.title }}</a>
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