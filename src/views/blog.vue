<template>
    <div id="blog">
        <h1>VUE3 BLOG</h1>
        <Posts />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Posts from '@/components/Posts.vue';

export default defineComponent({
    name: 'blog',

    components: { Posts },

    setup() {
        document.title = 'Home | Vue3 Blog';
    },
});
</script>

<style lang="scss">
#blog {
    animation: opacity-in 0.5s;
}
</style>
