<template>
    <transition name="left" mode="out-in">
        <div v-show="modals.menu.status" class="main-menu">
            <div class="top-side">
                <nuxt-link class="logo" to="/">
                    <img src="~/static/img/logo-dark.svg">
                </nuxt-link>
                <div class="wrapper">
                    <div>
                        <span class="_note">Навигация</span>

                        <nuxt-link to="/">
                            <img src="~/static/img/home.svg">
                            Главная страница
                        </nuxt-link>
                        <nuxt-link to="/courses">
                            <img src="~/static/img/courses.svg">
                            Все курсы
                        </nuxt-link>
                        <nuxt-link to="/job">
                            <img src="~/static/img/briefcase.svg">
                            Вакансии
                        </nuxt-link>
                        <nuxt-link to="/groups">
                            <img src="~/static/img/clock.svg">
                            Успейте записаться
                        </nuxt-link>
                        <nuxt-link to="/teachers">
                            <img src="~/static/img/users.svg">
                            Преподаватели
                        </nuxt-link>
                        <nuxt-link to="/gallery">
                            <img src="~/static/img/camera.svg">
                            Фотографии
                        </nuxt-link>
                        <nuxt-link to="/forms/fre">
                            <img src="~/static/img/dollar-sign.svg">
                            Бесплатный урок
                        </nuxt-link>
                        <nuxt-link to="/help">
                            <img src="~/static/img/chat.svg">
                            Контакты
                        </nuxt-link>
                    </div>

                    <div class="_margin-line"></div>

                    <div>
                        <span class="_note">Контакты</span>

                        <a href="tel:+998901977100">+998 (90) 197-71-00</a>
                        <a target="_blank" href="https://instagram.com/wepro.uz">Instagram</a>
                        <a target="_blank" href="https://www.facebook.com/wepro.uz">Facebook</a>
                        <a target="_blank" href="https://t.me/weprouz">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    computed: {
        ...mapGetters(["modals"])
	},
    methods: {
        ...mapActions(["log_out"]),
    }
}
</script>

<style scoped lang="scss">
:root {
    --corp: #2B41F0;
    --bg: #F1F6FB;
    --black: #10162F;
    --grey: #7c828d;
    --yellow: #F8D548;
    --green: #1CA245;
    --red: #DB1536;
    --accent: #4552B4;
}

.main-menu {
    .teacher-block {
        display: flex;
        align-items: center;
        .teacher-avatar {
            margin-right: 12px;
        }
        div {
            span {
                font-size: 11px;
            }
        }
    }
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 16;
    background-color: #fff;
    padding: 20px 0 20px 0;
    overflow-y: auto;
    height: 100%;
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 2px solid var(--bg);
    .top-side {
        .wrapper {
            a, ._note, .link {
                padding-left: 50px;
            }
        }
    }
    .bottom-side, .top-side .logo, ._margin-line {
        padding-right: 50px;
        padding-left: 50px;
    }
    ._margin-line {
        margin: 24px 0;
    }
    .logo {
        img {
            height: 40px;
        }
        display: block;
        margin-bottom: 24px;
    }
    .wrapper {
        a.nuxt-link-exact-active {
            background-color: var(--bg);
            &:before {
                width: 5px;
                height: 100%;
                position: absolute;
                content: "";
                left: 0;
                top: 0;
                bottom: 0;
                background-color: var(--black);
                border-radius: 0 5px 5px 0;
            }
        }
        ._note {
            color: var(--grey);
            display: block;
            margin-bottom: 12px;
        }
        a, .link {
            position: relative;
            padding: 12px 0;
            text-decoration: none;
            font-size: 18px;
            line-height: 2rem;
            letter-spacing: -.025rem;
            display: flex;
            align-items: center;
            img {
                margin-right: 12px;
                object-fit: contain;
            }
            &:hover {
                background-color: var(--bg);
            }
        }
    }
}

@media only screen and (max-width: 1440px) {
    .main-menu {
        width: 290px;
        .logo, a, ._note, .link, .bottom-side {
            padding-left: 24px!important;
            padding-right: 24px!important;
        }
        .bottom-side {
            ._note {
                padding-left: 0!important;
            }
        }
        .wrapper {
            a, .link {
                img {
                    width: 20px;
                    height: 20px;
                }
                padding: 8px 0;
                font-size: 16px;
            }
        }
        ._margin-line {
            margin: 18px 0;
        }
    }
}
</style>