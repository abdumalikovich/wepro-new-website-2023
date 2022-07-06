<template>
    <header class="light header_active">
        <div class="wrapper">
            <div class="links">
                <nuxt-link to="/" class="logo">
                    <img src="~/static/img/logo-dark.svg">
                </nuxt-link>

                <div class="_pc">
                    <nuxt-link to="#">Все курсы</nuxt-link>
                    <nuxt-link to="#">Успейте записаться</nuxt-link>
                    <nuxt-link to="#">Преподаватели</nuxt-link>
                    <nuxt-link to="#">Фотографии</nuxt-link>
                    <nuxt-link to="#">Бесплатный урок</nuxt-link>
                    <nuxt-link to="#">Контакты</nuxt-link>
                </div>
            </div>
            
            <button @click="openModalWindow({ name: 'register', bg: true })" class="light small">Консультация</button>
        </div>
    </header>
</template>

<script lang="ts">
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
    data() {
        return {
            header_active: false
        }
    },
    computed: {
        ...mapGetters(["modals"]),
    },
    methods: {
        ...mapMutations(["openModalWindow"]),
        ...mapActions(["log_out"]),
    },
    // mounted() {
    //     window.onscroll = () => {
    //         if(window.pageYOffset > 30) {
    //             this.header_active = true
    //         } else {
    //             this.header_active = false
    //         }
    //     }
    // }
}
</script>

<style lang="scss">
:root {
    --corp: #F55302;
    --bg: #F1F6FB;
    --black: #10162F;
    --grey: #7c828d;
    --yellow: #F8D548;
    --green: #1CA245;
    --red: #DB1536;
    --accent: #d68d2d;
}

header {
    z-index: 2;
    padding: 24px 50px;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    color: var(--black)!important;
    transition: .3s ease;
    display: flex;
    align-items: center;
    .open-menu {
        svg {
            width: 24px;
            height: 24px;
        }
    }
    .modal {
        box-shadow: 0 20px 100px rgba(0, 56, 70, .15);
        position: absolute;
        right: 24px;
        top: calc(100%);
        display: flex;
        flex-direction: column;
        padding: 24px;
        background-color: #fff;
        border: 1px solid var(--grey);
        border-radius: 11px;
        .log_out {
            cursor: pointer;
            color: #DB1536;
        }
        a, span {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 600;
            img {
                width: 18px;
                height: 18px;
                object-fit: contain;
                margin-right: 12px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .user {
        display: flex;
        align-items: center;
        background: transparent;
        color: var(--black);
        span, b {
            display: block!important;
            text-align: left;
        }
        img {
            width: 24px;
            height: 24px;
            border-radius: 200px;
            margin-left: 12px;
        }
    }
    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .logo {
            display: flex;
            align-items: center;
            margin-right: 24px;
            position: relative;
            img {
                height: 40px;
            }
        }
    }
    &.light {
        background-color: transparent;
        color: #fff;
        .links {
            img {
                filter: invert(1);
            }
        }
        a {
            color: #fff!important;
        }
        .user {
            .right {
                b {
                    color: #fff;
                }
            }
            .avatar {
                filter: invert(1);
            }
        }
        .modal {
            a {
                color: var(--black)!important;
            }
        }
        &.header_active {
            .user {
                b {
                    color: var(--black)!important;
                }
                img {
                    filter: invert(1);
                }
            }
        }
    }
    a {
        color: var(--black)!important;
        font-weight: 500;
        font-size: 16px;
    }
    ._width, .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .links {
        div {
            a {
                margin-right: 24px;
                display: inline-block;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .side {
        flex: 1;
        display: flex;
        align-items: center;
    }
    &.header_active {
        height: 80px;
        background-color: #fff;
        box-shadow: 0 2px 9px rgba(0, 0, 0, .04);
        &.light {
            .links {
                img {
                    filter: invert(0);
                }
            }
            a {
                color: var(--black)!important;
            }
            button.white {
                border: 1px solid rgba(0, 0, 0, 0.1);
            }
        }
    }
}

@media only screen and (max-width: 860px) {
    header {
        padding: 24px;
        button {
            padding-right: 0;
            padding-left: 0;
        }
        .logo {
            img {
                height: 30px;
            }
        }
    }   
}
</style>
