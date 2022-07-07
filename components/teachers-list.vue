<template>
    <div class="teachers-list">
        <div class="item" v-for="item of 12" :key="item.key">
            <img src="https://i.ibb.co/dQzRVGq/2022-03-31-11-01-24.jpg">
            <span class="_h4">Хамидов Шахзод</span>
            <p class="_note">Основатель Wepro. JavaScript/Vue-разработчик. Разработчик с 5-летним опытом, IT-предприниматель.</p>
        </div>
    </div>
</template>

<script lang="ts">
import {mapActions, mapMutations, mapState} from "vuex"

export default {
    data() {
        return {
            teachers: []
        }
    },
    methods: {
        ...mapMutations(["openModalWindow"]),
    },
}
</script>

<style scoped lang="scss">
.teachers-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .item {
        margin: 0 24px 24px 0;
        text-align: center;
        img {
            border-radius: 11px;
            max-width: 240px;
            max-height: 240px;
            object-fit: cover;
        }
        ._h4 {
            display: block;
            margin: 12px 0 4px;
        }
    }
}
</style>
