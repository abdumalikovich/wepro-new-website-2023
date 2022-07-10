<template>
    <div class="teacher-avatar">
        {{ name.trim().slice(0, 1) }}
    </div>
</template>

<script>
export default {
    props: [
        "name"
    ]
}
</script>

<style lang="scss" scoped>
    .teacher-avatar {
        min-width: 70px;
        width: 70px;
        min-height: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        background-color: var(--bg);
        border-radius: 1000px;
        font-size: 30px;
        background-color: #4552B4;
        line-height: 0;
        color: #fff;
        font-weight: 400;
    }
</style>