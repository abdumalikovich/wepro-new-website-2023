<template>
    <div class="teachers-list">
        <div class="item" v-for="item of list" :key="item.key">
            <img :src="item.avatar_url">
            <span class="_h4">{{ item.name }}</span>
            <p class="_note">{{ item.description }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    props: [
        "list"
    ],
}
</script>

<style scoped lang="scss">
.teachers-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    .item {
        margin: 0 24px 24px 0;
        text-align: center;
        img {
            border-radius: 11px;
            width: 240px;
            height: 240px;
            object-fit: cover;
        }
        ._h4 {
            display: block;
            margin: 12px 0 4px;
        }
    }
}
</style>
