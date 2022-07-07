<template>
    <div>
        <div class="wrapper gallery" v-if="limit">
            <img src="~/static/img/gallery/26.jpg">
            <img src="~/static/img/gallery/27.jpg">
            <img src="~/static/img/gallery/28.jpg">
            <img src="~/static/img/gallery/29.jpg">
            <img src="~/static/img/gallery/30.jpg">
            <img src="~/static/img/gallery/31.jpg">
            <img src="~/static/img/gallery/32.jpg">
            <img src="~/static/img/gallery/33.jpg">
            <img src="~/static/img/gallery/34.jpg">
        </div>
        <div class="wrapper gallery" v-else>
            <img src="~/static/img/gallery/1.jpg">
            <img src="~/static/img/gallery/2.jpg">
            <img src="~/static/img/gallery/3.jpg">
            <img src="~/static/img/gallery/4.jpg">
            <img src="~/static/img/gallery/5.jpg">
            <img src="~/static/img/gallery/6.jpg">
            <img src="~/static/img/gallery/7.jpg">
            <img src="~/static/img/gallery/8.jpg">
            <img src="~/static/img/gallery/9.jpg">
            <img src="~/static/img/gallery/10.jpg">
            <img src="~/static/img/gallery/11.jpg">
            <img src="~/static/img/gallery/12.jpg">
            <img src="~/static/img/gallery/13.jpg">
            <img src="~/static/img/gallery/14.jpg">
            <img src="~/static/img/gallery/15.jpg">
            <img src="~/static/img/gallery/16.jpg">
            <img src="~/static/img/gallery/17.jpg">
            <img src="~/static/img/gallery/18.jpg">
            <img src="~/static/img/gallery/19.jpg">
            <img src="~/static/img/gallery/20.jpg">
            <img src="~/static/img/gallery/21.jpg">
            <img src="~/static/img/gallery/22.jpg">
            <img src="~/static/img/gallery/23.jpg">
            <img src="~/static/img/gallery/24.jpg">
            <img src="~/static/img/gallery/25.jpg">
            <img src="~/static/img/gallery/26.jpg">
            <img src="~/static/img/gallery/27.jpg">
            <img src="~/static/img/gallery/28.jpg">
            <img src="~/static/img/gallery/29.jpg">
            <img src="~/static/img/gallery/30.jpg">
            <img src="~/static/img/gallery/31.jpg">
            <img src="~/static/img/gallery/32.jpg">
            <img src="~/static/img/gallery/33.jpg">
            <img src="~/static/img/gallery/34.jpg">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 330px;
    grid-gap: 24px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>