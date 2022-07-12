<template>
    <div class="work-list">
        <div class="item">
            <img src="~/static/img/work/7.jpeg">
            <span class="_h4">Leader Print</span>
            <p class="_note">Рекламное агенство</p>
        </div>
        <div class="item">
            <img src="~/static/img/work/6.jpeg">
            <span class="_h4">Madad Studio</span>
            <p class="_note">Брендинг-студия</p>
        </div>
        <div class="item">
            <img src="~/static/img/work/1.jpg">
            <span class="_h4">Brandex Group</span>
            <p class="_note">Брендинг-студия</p>
        </div>
        <div class="item">
            <img src="~/static/img/work/3.png">
            <span class="_h4">Asos Digital</span>
            <p class="_note">SMM-студия</p>
        </div>
        <div class="item">
            <img src="~/static/img/work/4.png">
            <span class="_h4">Narzi</span>
            <p class="_note">Дизайн-студия</p>
        </div>
        <!-- <div class="item">
            <img src="~/static/img/work/5.jpeg">
            <span class="_h4">Tapp</span>
            <p class="_note">FinTech-компания</p>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
.work-list {
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
