<template>
    <div id="app" class="layout-default">
        <header-component></header-component>
        <main-menu></main-menu>

        <transition name="left" mode="out-in">
            <img @click="closeAllModals()" v-if="modals.register.status || modals.leadGroup.status || modals.consultation.status || modals.openLesson.status" src="~/static/img/register-bg.svg" class="register-bg _pc">
        </transition>

        <!-- <modals-cookies></modals-cookies> -->

        <transition name="fade" mode="out-in">
            <div class="modal-default modal-left" v-if="modals.leadGroup.status">
                <img class="logo" src="~/static/img/logo-dark.svg">

                <div class="_heading">
                    <span class="_h3">Запись на набор</span>
                </div>

                <forms-groups></forms-groups>
                <div class="_margin-line"></div>

                <p class="_note">Пожалуйста, убедитесь, что правильно ввели данные.</p>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="modal-default modal-left" v-if="modals.consultation.status">
                <img class="logo" src="~/static/img/logo-dark.svg">

                <div class="_heading">
                    <span class="_h2">Консультация</span>
                    <p>Оставьте свои контакты и получите бесплатную консультацию по курсу, программе и спикерам.</p>
                </div>

                <forms-consultation></forms-consultation>
                <div class="_margin-line"></div>

                <p class="_note">Пожалуйста, убедитесь, что правильно ввели данные.</p>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="modal-default modal-left" v-if="modals.openLesson.status">
                <img class="logo" src="~/static/img/logo-dark.svg">

                <div class="_heading">
                    <span class="_h3">Открытый урок</span>
                    <p>Оставьте свои контакты и получите бесплатную консультацию по курсу, программе и спикерам.</p>
                </div>

                <forms-open-lesson></forms-open-lesson>
                <div class="_margin-line"></div>

                <p class="_note">Пожалуйста, убедитесь, что правильно ввели данные.</p>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="modal-notification success" @click="closeAllModals()" v-if="modals.success.status">
                <img src="~/static/img/check.svg">
                <span>{{ modals.success.text }}</span>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="modal-notification error" @click="closeAllModals()" v-if="modals.error.status">
                <img src="~/static/img/x-white.svg">
                <span>{{ modals.error.text }}</span>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="modal-bg" @click="closeAllModals()">
                <img v-if="modals.background.status" src="~/static/img/x-white.svg">
                <div v-if="modals.background.status" class="bg"></div>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div class="modal-default modal-left" v-if="modals.register.status">
                <img class="logo" src="~/static/img/logo-dark.svg">

                <div class="_heading">
                    <span class="_h3">Оставить заявку</span>
                    <p>Оставьте свои контакты и получите бесплатную консультацию по курсу, программе и спикерам.</p>
                </div>

                <forms-register></forms-register>

                <div class="_margin-line"></div>

                <p class="_note">Пожалуйста, убедитесь, что правильно ввели данные.</p>
            </div>
        </transition>

        <div class="loading-window" v-if="showHideSpinner">
            <img class="logo" src="~/static/img/loading-logo.svg">
            <div class="_h3">is loading <img src="~/static/img/loading.svg"></div>
        </div>

		<Nuxt />

        <help></help>

        <footer-component/>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import footerComponent from '~/components/footer-component.vue';

export default {
  components: { footerComponent },
    data() {
        return {
            showHideSpinner: false
        }
    },
    // beforeCreate() {
    //     this.showHideSpinner = true;
    // },
    // mounted() {
    //     this.showHideSpinner = false;
    // },
    computed: {
        ...mapGetters(["modals"])
	},
    methods: {
        ...mapMutations(["closeAllModals", "openModalWindow"])
    }
}
</script>

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

@font-face {
	font-family: "Road Radio";
	src: url("@/static/fonts/ROADRADIO-BLACK.TTF");
	font-weight: 900;
}

@font-face {
	font-family: "Road Radio";
	src: url("@/static/fonts/ROADRADIO-BOLD.TTF");
	font-weight: 700;
}

@font-face {
	font-family: "Road Radio";
	src: url("@/static/fonts/ROADRADIO.TTF");
	font-weight: 600;
}

@font-face {
	font-family: "Road Radio";
	src: url("@/static/fonts/ROADRADIO-LIGHT.TTF");
	font-weight: 500;
}

@font-face {
	font-family: "Road Radio";
	src: url("@/static/fonts/ROADRADIO-THIN.TTF");
	font-weight: 400;
}

@font-face {
    font-display: swap;
    font-family: "Apercu";
    font-style: normal;
    font-weight: bold;
	src: url("@/static/fonts/apercu-bold-pro.woff") format("woff"), url("@/static/fonts/apercu-bold-pro.woff2") format("woff2");
}

@font-face {
    font-display: swap;
    font-family: "Apercu";
    font-style: normal;
    font-weight: normal;
	src: url("@/static/fonts/apercu-regular-pro.woff") format("woff"), url("@/static/fonts/apercu-regular-pro.woff2") format("woff2");
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    border: none;
    font-weight: normal;
    font-family: "Apercu", sans-serif;
}

p {
    font-weight: 400;
    line-height: 1.3;
    &._plus {
        font-size: 16px;
    }
}

.cursor {
    cursor: pointer!important;
}

._h4, ._h3, ._h2, ._h1, h1, h2, h3, h4 {
    font-family: "Apercu", sans-serif;
}

.layout-default {
    padding-top: 80px;
}

.loading-window {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 101;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    flex-direction: column;
    .logo {
        margin-bottom: 12px;
    }
    div {
        display: flex;
        align-items: center;
        img {
            margin-left: 12px;
            animation: loading-window 5s infinite linear;
        }
    }
}

@keyframes loading-window {
    0% {
        transform: rotate(0deg);
    } 100% {
        transform: rotate(3600deg);
    }
}

ul {
    list-style: none;
}

.auth-page {
    text-align: center;
    ._margin-line {
        margin: 36px 0;
        background-color: rgba(0, 0, 0, .2);
    }
    ._main_heading {
        margin: 144px 0;
        background-image: none!important;
        background-color: #fff!important;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0!important;
    }
    .form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .form-element {
            display: flex;
            justify-content: center;
            margin-bottom: 44px;
        }
    }
}

._pc {
    display: block!important;
}
._mobile {
    display: none!important;
}

._filled {
    padding: 80px 0;
    ._width, ._width_small {
        padding: 24px;
        border-radius: 11px;
        backdrop-filter: blur(5px);
        background-color: hsla(0,0%,100%,.1);
        position: relative;
        z-index: 1;
        p {
            margin-bottom: 24px;
        }
    }
}

._dotted {
    ._heading {
        p {
            color: var(--black);
        }
    }
}

._link {
    color: var(--corp);
    text-decoration: underline;
    cursor: pointer;
}

body {
    color: var(--black);
}

a {
    cursor: pointer!important;
    color: var(--black);
    text-decoration: none;
}

._width_small {
    max-width: 990px;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
}

._width {
    max-width: 1369px;
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
}

button {
    &:disabled {
        opacity: 0.45;
        pointer-events: none;
    }
    white-space: nowrap;
    color: #fff;
    background-color: var(--corp);
    padding: 12px 22px;
    border-radius: 4px;
    height: 48px;
    font-size: 15px;
    transition: .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer!important;
    border-radius: 100px;
    border: 2px solid transparent;
    &:hover {
        transform: translate3d(0,2px,0) scale(.99);
    }
    img {
        margin-right: 8px;
    }
    &.style-1 {
        border-color: #fff;
        color: #fff;
        background-color: transparent;
    }
    &.style-2 {
        background-color: #fff;
        color: var(--black);
    }
    &.style-3 {
        background-color: var(--corp);
        color: #fff;
    }
    &.style-4 {
        background-color: transparent;
        color: var(--black);
        border-color: var(--accent);
    }
    &.style-5 {
        background-color: transparent;
        color: #fff;
        border-color: #fff;
    }
    &.small {
        height: 30px;
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 11px 15px;
        border: 1px solid var(--grey);
        color: var(--black);
        font-weight: bold;
        border: none;
        border-radius: 100px;
        height: 40px;
        color: var(--black);
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .1);
        img {
            width: 12px;
            height: 12px;
            object-fit: contain;
            object-position: center center;
            margin-right: 6px;
            transform: translateY(-1px);
        }
        span {
            color: var(--black);
        }
    }
    &.icon {
        padding: 0;
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 12px;
            height: 12px;
            margin-right: 0;
        }
        span {
            margin-left: 8px;
            padding-top: 2px;
        }
    }
    &.loading {
        color: transparent!important;
        position: relative;
        cursor: default!important;
        &:before {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-loader'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E");
            width: 20px;
            height: 20px;
            background-size: contain;
            animation: loading-button 3s infinite;
        }
        &:hover {
            transform: translate3d(0,0,0) scale(1);
        }
    }
}

@keyframes loading-button {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

._buttons {
    display: flex;
    align-items: center;
    margin-top: 24px;
    button {
        margin-top: 0!important;
        margin-right: 7px;
        &:last-child {
            margin-right: 0;
        }
    }
    a {
        margin-right: 7px;
        &:last-child {
            margin-right: 0;
        }
    }
}

._margin {
    height: 74px;
}

.dark {
    padding: 80px;
    color: #fff;
    background-color: var(--black);
    ._heading {
        margin-top: 0;
    }
}

.success-animation {
    position: fixed;
    z-index: 100;
    div {
        position: absolute;
        animation: successBoxes 5s 1 ease-out forwards;
    }
}

@keyframes successBoxes {
    from {
        margin-top: -100vh;
    } to {
        margin-top: 100vh;
    }
}

@keyframes success {
    from {
        margin-top: 0;
    } to {
        margin-top: 102vh;
        opacity: 0;
    }
}

.fade-enter-active,
.fade-leave-active,
.height-enter-active,
.height-leave-active,
.bottom-top-enter-active,
.bottom-top-leave-active,
.transform-bottom-top-enter-active,
.transform-bottom-top-leave-active,
.top-bottom-enter-active,
.top-bottom-leave-active,
.left-enter-active,
.left-leave-active {
	transition: 0.3s ease;
}

.left-enter,
.left-leave-to {
	transform: translateX(-100px);
	opacity: 0;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.height-enter,
.height-leave-to {
	opacity: 0;
	height: 0;
}

.bottom-top-enter,
.bottom-top-leave-to {
	margin-top: 30px;
	opacity: 0;
}

.top-bottom-enter,
.top-bottom-leave-to {
	margin-top: -30px;
	opacity: 0;
}

.transform-bottom-top-enter,
.transform-bottom-top-leave-to {
	// margin-top: 30px;
	transform: translateY(30px);
	opacity: 0;
}

// Menu
.menu-animation-enter-active,
.menu-animation-leave-active {
	transition: 0.5s linear;
}

.menu-animation-enter,
.menu-animation-leave-to {
	margin-top: -100%;
	opacity: 0;
}


.signed-user-modal {
    position: fixed;
    width: 90px;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 15;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    background-color: rgba(246, 247, 250, .9);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(0, 0, 0, .1);
    &:hover {
        .top-side, .bottom-side {
            a, p {
                span {
                    opacity: 1;
                }
            }
        }
    }
    .top-side {
        .logo {
            img {
                width: 32px;
                height: 32px;
            }
        }
    }
    .links {
        margin-top: 24px;
        a, p {
            margin-bottom: 18px;
            img {
                width: 18px;
                height: 18px;
                transition: .3s ease;
            }
            display: flex;
            flex-direction: column;
            font-size: 12px;
            font-weight: 400;
            align-items: center;
            padding: 0 6px;
            transition: .3s ease;
            span {
                opacity: 0;
                margin-top: 6px;
                transition: .3s ease;
            }
        }
    }
}
.loading-modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 15;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black);
    background-image: url("~/static/img/dots.svg");
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
            margin-bottom: 12px;
            width: 60px;
            height: 60px;
        }
        p {
            font-weight: 500;
            font-size: 24px;
            max-width: 60ch;
        }
    }
}
.register-bg {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 16;
    height: 100vh;
}
.modal-bg {
    .bg {
        background-color: rgba(0, 0, 0, .85);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 15;
    }
    img {
        position: fixed;
        right: 24px;
        top: 24px;
        z-index: 11;
        width: 40px;
        height: 40px;
        cursor: pointer;
        bottom: 0;
        z-index: 16;
    }
}
.modal-left-bottom {
    position: fixed;
    bottom: 24px;
    left: 24px;
    background-color: #fff;
    padding: 12px 24px;
    border: 1px solid var(--bg);
    border-radius: 11px;
    z-index: 101;
    max-width: 400px;
    p {
        font-size: 14px;
    }
}
.modal-notification {
    position: fixed;
    bottom: 24px;
    left: 24px;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 12px 24px;
    border: 1px solid var(--bg);
    border-radius: 11px;
    z-index: 101;
    img {
        margin-right: 12px;
        width: 24px;
        height: 24px;
    }
    &.success {
        color: #fff;
        background-color: var(--green);
    }
    &.error {
        color: #fff;
        background-color: var(--red);
    }
}
.modal-loading {
    .loading-circle {
        position: relative;
        z-index: 16;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: loading-circle 1s infinite;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
        }
    }
    iframe {
        z-index: 16;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 60vh;
        height: 34vh;
        position: fixed;
    }
}

.modal-left {
    text-align: left!important;
    transform: translateY(-50%)!important;
    left: 80px!important;
    box-shadow: 0 1px 9px rgba(0, 0, 0, .13);
    form {
        width: auto;
    }
}
.modal-default {
    .logo {
        height: 40px;
    }
    z-index: 16;
    background-color: #FAFBFC;
    position: fixed;
    width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 44px;
    border-radius: 11px;
    border-radius: 4px;
    padding: 30px 40px;
    overflow: hidden;
    p {
        max-width: 300px;
    }
    .bg {
        position: absolute;
        right: -48px;
        bottom: 0;
        object-fit: cover;
        height: 100%;
        z-index: -1;
    }
    .logo {
        margin-bottom: 24px;
    }
    form {
        margin-right: 0;
        width: 100%;
    }
    ._margin-line {
        margin: 24px 0;
        background-color: rgba(0, 0, 0, .2);
    }
    .close {
        cursor: pointer;
        position: absolute;
        right: 24px;
        top: 24px;
    }
    ._heading {
        margin-top: 0;
        p {
            color: var(--black);
        }
    }
    .social-links {
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            display: block;
            margin-top: 6px;
            margin: 0 6px;
        }
        img {
            width: 28px;
            height: 28px;
        }
        .google {
            border: 1px solid var(--grey);
            background-color: #fff;
            color: #757575!important;
        }
        .facebook {
            background-color: #1877F2!important;
            color: #fff!important;
            border-color: #1877F2!important;
        }
    }
}

// @media only screen and (max-width: 860px) {
//     .modal-default {
//         left: 50%!important;
//         top: 50%!important;
//         transform: translate(-50%, -50%)!important;
//         width: calc(100% - 24px)!important;
//         padding: 32px 24px;
//         p {
//             font-size: 14px;
//             line-height: 1.2;
//         }
//         ._heading {
//             margin-top: 0!important;
//         }
//         .social-links {
//             img {
//                 width: 22px;
//                 height: 22px;
//             }
//         }
//     }
//     .modal-bg {
//         img {
//             right: 12px;
//             top: 12px;
//             width: 30px;
//             height: 30px;
//         }
//     }
//     iframe {
//         width: calc(100% - 24px)!important;
//     }
// }

.upload {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed rgb(208, 214, 208);
    border-radius: 1000px;
    width: 200px;
    height: 200px;
    justify-content: center;
    text-align: center;
    img {
        width: 100px;
        object-fit: contain;
        margin-bottom: 12px;
    }
    span {
        display: block;
    }
}

._main_heading {
    background-color: var(--bg);
    padding: 120px 0 60px;
    p {
        margin-top: 14px;
        color: var(--grey);
    }
}

._heading {
    margin: 75px 0 40px;
    &._heading-dark {
        p {
            color: var(--black)!important;
        }
    }
    img {
        margin-bottom: 24px;
        box-shadow: 0 20px 25px rgba(155, 81, 224, .3);
        border-radius: 15px;
    }
    &.centered {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        color: #fff;
        opacity: 0.7;
        max-width: 80ch;
        padding-top: 10px;
        font-weight: 500;
        font-size: 14px;
    }
}

._dotted, ._dotted_white {
    padding: 70px;
    background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAgACADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAcK/8QAHxAAAQMFAAMAAAAAAAAAAAAABgQFCAAHFBUWFyUm/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANvMXIuWJhdYkGjRGgG8a2Str03FBXTGJjpexMSE/I/oz8hKi1x2JaVPzt7Z+X4efgIMVsSokSe/0pQQCLkXLEwusSDRojQDeNbJW16bigrpjEx0vYmJCfkf0Z+QlRa47EtKn529s/L8PPwEGK2JUSJPf6UoIBFyLliYXWJBo0RoBvGtkra9NxQV0xiY6XsTEhPyP6M/ISotcdiWlT87e2fl+Hn4CDFbEqJEnv8ASlBAIuRcsTC6xINGiNAN41slbXpuKCumMTHS9iYkJ+R/Rn5CVFrjsS0qfnb2z8vw8/AQYrYlRIk9/pSg/9k=");
    ._width, ._width_small {
        background-color: #fff;
        padding: 55px;
        ._heading {
            margin-top: 0;
        }
    }
}

._dotted_white {
    background-image: url("data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAApSURBVHgB7dahEQAwDMSwv+6/c0s6QQICInFz534p6vYnAMA0PwAA6z1GXx/lwxPmxwAAAABJRU5ErkJggg==");
    ._width, ._width_small {
        background-color: var(--black);
    }
}

.teacher {
    display: flex;
    align-items: center;
    margin-top: 24px;
    img {
        width: 92px;
        height: 92px;
        border-radius: 1000px;
    }
    .text {
        margin-left: 13px;
        p {
            font-size: 18px;
            font-weight: 600;
        }
    }
}

h1, ._h1, h2, ._h2, h3, ._h3 {
    font-family: "Road Radio";
    display: block;
}

h1, ._h1 {
    font-size: 72px;
    line-height: .85;
    font-weight: 900;
    display: block;
}

h2, ._h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: .85;
    display: block;
}

h3, ._h3 {
    font-size: 28px;
    font-weight: 900;
    display: block;
}

h4, ._h4 {
    font-size: 20px;
    font-weight: 700;
    display: block;
    font-family: "Road Radio";
}

._note {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
    a {
        color: var(--corp)!important;
        text-decoration: underline;
    }
}

b {
    font-weight: 600!important;
}

._fill {
    font-size: 14px;
    color: #fff;
    background-color: var(--black);
    padding: 3px 8px;
    font-weight: 600;
    border-radius: 5px;
    margin-right: 5px;
    &.corp {
        background-color: var(--corp);
    }
    &.red {
        background-color: var(--red);
    }
}

.error-text {
    color: var(--red)!important;
    border: 2px solid var(--red);
    padding: 8px;
    display: block;
    background-color: #db153624;
    font-size: 13px;
    border-radius: 100px;
    margin-bottom: 12px;
}

form {
    display: flex;
    flex-direction: column;
    width: 400px;
    span {
        display: block;
        margin-top: 12px;
        margin-bottom: 4px;
        color: var(--black)!important;
        &:first-child {
            margin-top: 0;
        }
    }
    fieldset {
        display: flex;
        align-items: center;
        background-color: var(--bg);
        margin-bottom: 8px;
        border-radius: 100px;
        border: 2px solid rgba(185,190,199,.6);
        input {
            border: none;
            margin-bottom: 0;
            width: 100%;
        }
        .show-password {
            height: 54px;
            width: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
            &:before {
                width: 16px;
                height: 16px;
                content: "";
                background-image: url("@/static/img/eye-off.svg");
                background-size: cover;
            }
            &.active {
                &:before {
                    background-image: url("@/static/img/eye.svg");
                }
            }
        }
    }
    textarea {
        resize: vertical;
        height: 100px;
    }
    select {
        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance:none;
        background-image: url("~/static/img/arrow.webp");
        background-repeat: no-repeat;
        background-position: 95% center;
        background-size: 12px;
    }
    input, select, textarea {
        padding: 17px 22px;
        font-size: 16px;
        background-color: var(--bg);
        margin-bottom: 8px;
        border: 2px solid rgba(185,190,199,.6);
        border-radius: 29px;
        &:focus {
            border-color: var(--accent);
        }
    }
    button {
        margin-top: 12px;
        box-shadow: 0 10px 25px rgba(245, 83, 2, .5);;
    }
}

.dont-know {
    background: url("~/static/img/dots.svg") repeat center/auto,linear-gradient(270deg, #FFAF00 0, #F50347 100%);
    ._width_small {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            margin-left: 140px;
        }
    }
}


._margin-line {
    height: 2px;
    background-color: var(--bg);
    margin: 75px 0;
    width: 100%;
}

.lessons-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .lesson-item {
        border: 1px solid var(--grey);
        border-radius: 11px;
        height: 125px;
        background-color: #fff;
        color: var(--black);
        margin: 0 12px 12px 0;
        padding: 18px;
        font-weight: 600;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
    }
    a {
        &:nth-child(4n) {
            .lesson-item {
                margin-right: 0;
            }
        }
    }
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .project-item {
        margin: 0 10px 10px 0;
        .preview {
            height: 125px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
        .description {
            .project-title {
                font-weight: 600;
                display: block;
                margin: 18px 0 10px;
                text-transform: uppercase;
                font-size: 14px;
            }
            p {
                font-size: 14px;
                color: var(--grey);
            }
        }
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
}

@keyframes loading-circle {
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
}

// @media only screen and (max-width: 860px) {
// body {
//     button {
//         font-size: 14px;
//         padding-left: 16px;
//         padding-right: 16px;
//     }
//     ._pc {
//         display: none!important;
//     }
//     ._mobile {
//         display: block!important;
//     }
//     ._dotted ._width, ._dotted ._width_small, ._dotted_white ._width, ._dotted_white ._width_small {
//         padding: 0 20px;
//     }
//     ._margin {
//         height: 42px;
//     }
//     button.icon {
//         width: 40px;
//         height: 40px;
//     }
//     ._margin-line {
//         margin: 18px 0;
//     }
//     form {
//         input, select, textarea {
//             padding: 13px 18px;
//             font-size: 14px;
//         }
//         fieldset {
//             .show-password {
//                 width: 40px;
//                 min-width: 40px;
//                 height: 40px;
//             }
//         }
//     }
//     button {
//         height: 48px;
//     }
//     .register-bg {
//         display: none;
//     }
//     .loading-list {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         div {
//             height: 160px;
//             margin: 0 12px 12px 0;
//         }
//     }
//     ._filled ._width_small, ._filled ._width {
//         margin: 0 12px;
//     }
//     p {
//         font-size: 16px;
//         line-height: 1.3;
//     }
//     header {
//         left: 0;
//         right: 0;
//         padding: 20px;
//         .wrapper {
//             .links {
//                 div {
//                     display: none;
//                 }
//             }
//         }
//     }
//     h1, ._h1 {
//         font-size: 32px!important;
//         margin-bottom: 12px!important;
//         text-align: left;
//     }
//     h2, ._h2 {
//         font-size: 24px;
//         font-weight: 600;
//     }
//     ._heading {
//         margin: 60px 0 24px!important;
//     }
//     ._main_heading {
//         text-align: left;
//         padding-top: 120px;
//         padding-bottom: 24px;
//         .description {
//             text-align: left;
//         }
//         ._buttons {
//             flex-direction: row-reverse;
//             justify-content: flex-end!important;
//             .play-video {
//                 margin-left: 12px;
//                 &:before {
//                     display: none;
//                 }
//             }
//         }
//     }
//     ._width, ._width_small {
//         padding-left: 20px;
//         padding-right: 20px;
//     }
//     ._buttons {
//         justify-content: flex-start!important;
//     }
//     ._note {
//         font-size: 13px;
//     }
//     .courses-list {
//         .wrapper-boxes {
//             grid-template-columns: 1fr;
//         }
//         a {
//             margin-right: 0!important;
//             .item {
//                 border-radius: 6px;
//                 display: flex;
//                 flex-direction: row-reverse;
//                 align-items: center;
//                 padding: 18px;
//                 border-radius: 11px;
//                 .price {
//                     margin-top: 24px;
//                     display: block;
//                     font-size: 14px;
//                 }
//                 .preview {
//                     min-width: 72px;
//                     height: 72px;
//                 }
//                 .description {
//                     padding: 0;
//                     padding-right: 12px;
//                 }
//             }
//             button {
//                 display: none;
//             }
//         }
//     }
//     p {
//         font-size: 14px;
//     }
//     form {
//         width: 100%;
//     }
//     .dark, .ready-to-start-block, ._dotted_white, ._dotted {
//         padding: 44px 24px!important;
//         ._heading {
//             margin-top: 0!important;
//         }
//         ._width, ._width_small {
//             padding: 0;
//         }
//     }
//     ._dotted_white, ._dotted {
//         background-image: none;
//     }
//     .numbers {
//         .wrapper {
//             grid-template-columns: 1fr 1fr;
//             div {
//                 margin: 0 24px 24px 0;
//                 .number {
//                     font-size: 54px;
//                 }
//             }
//         }
//     }
//     h3, ._h3 {
//         font-size: 18px;
//     }
//     .img-text {
//         flex-direction: column;
//         align-items: flex-start;
//         img {
//             width: 100%;
//             margin-left: 0!important;
//             margin-right: 0!important;
//             width: 200px;
//             height: 200px;
//             margin-top: 24px;
//         }
//         ._heading {
//             margin-top: 0!important;
//             margin-bottom: 0!important;
//         }
//         .side {
//             img {
//                 width: 40px;
//                 height: 40px;
//                 border-radius: 5px;
//             }
//         }
//         .preview {
//             width: 100%;
//         }
//         &.reverse   {
//             flex-direction: column-reverse;
//         }
//     }
// }
// }

@media only screen and (max-width: 1440px) {
    h1, ._h1 {
        font-size: 60px;
    }
    h2, ._h2 {
        font-size: 42px;
    }
    h3, ._h3 {
        font-size: 24px;
    }
    ._heading {
        margin: 60px 0 32px;
    }
    ._buttons {
        margin-top: 18px;
    }
    .wrapper-vertical .item {
        padding: 24px;
    }
    footer {
        padding: 28px;
    }
    ._main_heading {
        padding: 80px 0 60px;
    }
    .modal-default .logo {
        height: 30px;
    }
    .modal-left {
        left: 60px!important;
    }
    .register-bg {
        left: -20%;
    }
    ._dotted ._width, ._dotted ._width_small, ._dotted_white ._width, ._dotted_white ._width_small {
        padding: 42px;
    }
}

@media only screen and (max-width: 860px) {
    button {
        padding: 10px 18px;
        height: auto;
        font-size: 14px;
        font-weight: 400;
    }
    .auth-page {
        ._main_heading {
            margin: 80px 0;
        }
    }
    ._width {
        width: 100%;
    }
    #page-404 {
        text-align: center;
    }
    h4, ._h4 {
        font-size: 18px;
    }
    h3, ._h3 {
        font-size: 20px;
    }
    ._margin {
        height: 54px;
    }
    ._main_heading {
        padding: 60px 0;
    }
    p, span {
        font-size: 14px;
    }
    ._dotted, ._dotted_white {
        padding: 24px;
    }
    ._dotted ._width, ._dotted ._width_small, ._dotted_white ._width, ._dotted_white ._width_small {
        padding: 23px;
    }
    .modal-left {
        left: 24px!important;
        right: 24px!important;
        width: auto;
    }
    .modal-default {
        padding: 24px;
    }
    form {
        input, select, textarea {
            padding: 12px 18px;
            font-size: 14px;
        }
        fieldset .show-password {
            width: 43px;
            height: 43px;
        }
    }
    ._fill {
        white-space: nowrap;
        font-size: 10px;
    }
    ._pc {
        display: none!important;
    }
    ._mobile {
        display: block!important;
    }
    h1, ._h1 {
        font-size: 32px;
    }
    h2, ._h2 {
        font-size: 24px;
    }
    ._filled {
        padding: 60px 0;
        ._width_small, ._width {
            margin-left: 12px!important;
            margin-right: 12px!important;
        }
    }
    form {
        width: 100%;
    }
    .dark {
        padding: 54px 24px;
        ._width_small {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
</style>