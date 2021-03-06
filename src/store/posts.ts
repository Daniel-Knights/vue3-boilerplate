import { ref, computed } from 'vue';
import Axios from 'axios';
import { Post } from '@/types';

const loading = ref<boolean>(false);
const posts = ref<object[]>([]);
const selectedPost = ref<Post>({ title: '', text: '' });

export default function postsStore() {
    async function fetchPosts() {
        await Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                posts.value = res.data;
            })
            .catch(err => {
                console.log(err);
            });
    }

    async function fetchSelectedPost(id: string) {
        loading.value = true;

        await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                selectedPost.value = res.data;
                loading.value = false;
            })
            .catch(err => {
                console.log(err);
                loading.value = false;
            });
    }

    return {
        loading: computed(() => loading.value),
        posts: computed(() => posts.value),
        selectedPost: computed(() => selectedPost.value),

        fetchPosts,
        fetchSelectedPost,
    };
}
