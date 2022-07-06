<template>
    <div class="loading-table">
        <table border>
            <tr>
                <td v-for="item of 4" :key="item.keyy"></td>
            </tr>
            <tr>
                <td v-for="item of 4" :key="item.keyy"></td>
            </tr>
            <tr>
                <td v-for="item of 4" :key="item.keyy"></td>
            </tr>
            <tr>
                <td v-for="item of 4" :key="item.keyy"></td>
            </tr>
            <tr>
                <td v-for="item of 4" :key="item.keyy"></td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
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

.loading-table {
    tr {
        td {
            border: 10px solid #fff;
            padding: 24px;
            // border-radius: 10px;
            background-color: #d8dde3;
            position: relative;
            overflow: hidden;
            &:before {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
                -webkit-animation-duration: 0.9s;
                animation-duration: 0.9s;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-animation-name: loader-animate;
                animation-name: loader-animate;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
                background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);
            }
        }
        &:last-child {
            td {
                border: 10px solid #fff;
            }
        }
    }
}
</style>