<template>
    <div class="loading-courses">
        <div class="item" v-for="item of 4" :key="item.key"
            :style="{
                'animation-delay':
                    Math.random().toString().slice(2, 4) + '0ms',
            }"
        >
            <div class="preview"></div>
            <div class="description">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
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

.loading-courses {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .item {
        border-radius: 11px;
        margin: 0 24px 24px 0;
        min-height: 200px;
        transition: .3s;
        background-color: var(--bg);
        overflow: hidden;
        position: relative;
        img {
            animation: loading-circle 1s infinite;
            width: 16px;
            height: 16px;
        }
        &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            animation-duration: 0.9s;
            animation-iteration-count: infinite;
            animation-name: loader-animate;
            animation-timing-function: linear;
            background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);
        }
        .preview {
            height: 165px;
            background-color: #d8dde3;
            border-radius: 11px;
        }
        .description {
            padding: 14px;
            div {
                border-radius: 5px;
                background-color: #d8dde3;
            }
            div:nth-child(1) {
                height: 16px;
                width: 60%;            
            }
            div:nth-child(2) {
                margin: 10px 0px;
                height: 30px;
                width: 75%;
            }
            div:nth-child(3) {
                height: 13px;
                width: 40%;
            }
        }
    }
}

@keyframes loading_elements{
    0%, 100%{
        opacity:1
    }
    33% {
        opacity:.3
    }
    66% {
        opacity:.6
    }
}

@keyframes loader-animate {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
}

@keyframes loading-circle {
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
}

@media only screen and (max-width: 860px) {
    .loading-courses {
        grid-template-columns: 1fr;
    }
}
</style>
