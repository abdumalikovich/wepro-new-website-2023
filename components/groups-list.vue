<template>
    <div class="groups-list">
        <div class="item" @click="openModalWindow({ name: 'leadGroup', bg: true, id: item._id })" v-for="item of list" :key="item.key">
            <span class="_h3">{{ item.courseId.title }}</span>
            <span class="_note">Осталось мест: {{ item.need_quantity }}</span>

            <div class="line"><div :style="{width: + 100 - (100 / 10 * item.need_quantity) + '%'}"></div></div>

            <ul>
                <li v-if="item.days == '1-3-5'">Дни: Понедельник-среда-пятница</li>
                <li v-if="item.days == '2-4-6'">Дни: Вторник-четверг-суббота</li>
                <li>Время: {{ item.time }}</li>
            </ul>

            <button v-if="item.need_quantity > 0" class="style-4">Записаться в группу</button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    props: [
        "list"
    ],
    methods: {
        ...mapMutations(["openModalWindow"])
    }
}
</script>

<style scoped lang="scss">
:root {
    --accent: #d68d2d;
    --corp: #F55302;
    --bg: #F1F6FB;
    --black: #10162F;
    --grey: #7c828d;
    --yellow: #F8D548;
    --green: #1CA245;
    --red: #DB1536;
}

.groups-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    .item {
        background-color: var(--bg);
        padding: 32px;
        border: 2px solid transparent;
        transition: .3s linear;
        border-radius: 8px;
        margin: 0 12px 12px 0;
        cursor: pointer;
        ._h3 {
            display: block;
            margin-bottom: 4px;
        }
        .line {
            margin: 18px 0;
            height: 6px;
            border-radius: 20px;
            background-color: #fff;
            overflow: hidden;
            div {
                height: 100%;
                left: 0;
                width: 75%;
                background-color: var(--corp);
                border-radius: 20px;
            }
        }
        ul {
            margin-bottom: 24px;
            li {
                margin: 4px 0;
                position: relative;
                display: flex;
                align-items: center;
                white-space: wrap;
                div {
                    margin-left: 12px;
                    height: 1px;
                    background-color: #C4C4C4;
                    width: 100%;
                }
            }
        }
        &:hover {
            background-color: #fff;
            box-shadow: 15px 15px 30px rgb(0 0 0 / 10%);
            border: 2px solid var(--accent);
        }
    }
}
</style>
