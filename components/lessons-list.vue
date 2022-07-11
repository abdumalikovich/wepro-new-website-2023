<template>
    <div class="bottom-side lessons-list">
        <div class="lesson-item" v-for="item of data" :key="item.key">
            <span class="lesson-title _h4">{{ item }}</span>
            <span class="lesson-number">
                <span>Занятие {{ data.indexOf(item) + 1 }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "data"
    ]
}
</script>

<style scoped lang="scss">
@media only screen and (max-width: 860px) {
    .lessons-list {
        grid-template-columns: repeat(3, 1fr);
        a {
            margin: 0 6px 6px 0;
            .lesson-item {
                margin: 0;
                padding: 16px;
            }
        }
    }
}
</style>
