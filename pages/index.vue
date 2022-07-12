<template>
    <main id="page-home">
        <div class="_main_heading">
            <div class="_width">
                <h1>С нуля до PRO в самой крупной IT-школе в Самарканде</h1>
                <p class="description">4 месяца и вы готовый к работе специалист. Доступно. Качественно. По авторским методикам и постоянным контактом с преподавателем. Курсы по программированию, маркетингу, SMM, 3D-моделированию и графическому дизайну.</p>
                
                <div class="_buttons">
                    <button @click="openModalWindow({ name: 'register', bg: true })" class="style-2">Записаться на курс</button>
                    <button @click="openModalWindow({ name: 'openLesson', bg: true })" class="style-1">Бесплатный урок</button>
                </div>
            </div>
        </div>

        <div class="all-courses _width">
            <div class="_heading">
                <span class="_h2">Успейте записаться в новые группы</span>
            </div>
            <div class="wrapper">
                <client-only>
                    <groups-list v-if="allData.groups.body.length" :list="allData.groups.body"/>
                    <loading-courses v-else/>
                </client-only>
            </div>
        </div>

        <div class="_margin"></div>

        <a href="https://t.me/wepro_uz">
            <div class="telegram-notification _filled">
                <img src="~/static/img/telegram.svg" class="tg-1">
                <img src="~/static/img/telegram.svg" class="tg-2">

                <div class="_width_small">
                    <div class="wrapper">
                        <p class="_h3">Отслеживайте нас в Telegram</p>
                        <p>Подпишитесь на наш канал в Telegram и будьте одним из первых, кто узнает о новых курсах, открытых уроках и отличных предложениях.</p>
                        <button class="style-5">Перейти в Telegram</button>
                    </div>
                </div>
            </div>
        </a>

        <div class="all-courses _width">
            <div class="_heading">
                <span class="_h2">Все курсы</span>
            </div>
            <div class="wrapper">
                <client-only>
                    <courses-list v-if="allData.courses.body.length" :list="allData.courses.body"></courses-list>
                    <loading-courses v-else></loading-courses>
                </client-only>
            </div>
        </div>

        <div class="_margin"></div>

        <form-lead></form-lead>

        <numbers-block></numbers-block>

        <div class="all-work _width" id="work">
            <div class="_heading">
                <span class="_h2">Где работают наши выпускники</span>
                <p></p>
            </div>
            <work-block></work-block>
        </div>

        <div class="all-teachers _width">
            <div class="_heading">
                <span class="_h2">Наша команда</span>
            </div>
            <div class="wrapper">
                <teachers-list v-if="allData.teachers.body.length" :list="allData.teachers.body"></teachers-list>
            </div>
        </div>

        <!-- <div class="all-reviews _width">
            <div class="_heading">
                <span class="_h2">Отзывы от студентов</span>
            </div>
            <div class="wrapper">
                <reviews-list></reviews-list>
            </div>
        </div> -->

        <!-- <div class="teachers-block _width">
            <div class="_heading">
                <span class="_h2">Biz noyob platformani taklif qilamiz</span>
            </div>
            <div class="wrapper">
                <div class="item" v-for="item of 12" :key="item.key">
                    <img src="~/static/img/teacher.jpg">
                    <b>Alex Adams</b>
                    <span class="_note">Генеральный директор, управляющий партнер TalentTech</span>
                </div>
            </div>
        </div> -->

        <div class="_margin"></div>

        <!-- <dont-know/> -->
    </main>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
	computed: {
		...mapGetters(["allData"]),
	},
    methods: {
        ...mapMutations(["openModalWindow"]),
		...mapActions(["GET_DATA"]),
    },
	created() {
		this.GET_DATA(["groups", "courses", "teachers"])
	},
}
</script>

<style lang="scss">
:root {
    --corp: #F55302;
    --bg: #F1F6FB;
    --black: #10162F;
    --grey: #7c828d;
    --yellow: #F8D548;
}

@keyframes telegram_1 {
    0% {
        left: 30%;
        top: 18%;
    } 33% {
        left: 26%;
        top: 31%;
    } 66% {
        left: 35%;
        top: 12%;
    } 100% {
        left: 30%;
        top: 18%;
    }
}

@keyframes telegram_2 {
    0% {
        top: 60%;
        left: 70%;
    } 33% {
        top: 51%;
        left: 51%;
    } 66% {
        top: 41%;
        left: 65%;
    } 100% {
        top: 60%;
        left: 70%;
    }
}

.telegram-notification {
    position: relative;
    background: url("~/static/img/dots.svg") repeat center/auto,linear-gradient(270deg, #FFAF00 0, #F50347 100%);
    p {
        color: #fff!important;
    }
    .tg-1 {
        width: 46px;
        height: 46px;
        position: absolute;
        animation: telegram_1 30s infinite;
    }
    .tg-2 {
        width: 84px;
        height: 84px;
        position: absolute;
        animation: telegram_2 40s infinite;
    }
}

#page-home {
    .about-platform {
        ._heading {
            margin-top: 0;
            margin-bottom: 14px;
        }
        .preview {
            margin-right: 0!important;
            margin-left: 70px;
            object-fit: cover;
        }
    }
    .about-platform-2 {
        .preview {
            margin-right: 70px!important;
            margin-left: 0!important;
        }
    }
    ._main_heading {
        h1 {
            max-width: 20ch;
        }
        text-align: center;
        background: url("~/static/img/main.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-color: #000000;
        color: #fff;
        ._width {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .description {
            max-width: 100ch;
            color: #fff;
        }
        .list {
            display: flex;
            align-items: center;
            justify-content: center;
            div {
                margin: 0 19px;
                display: flex;
                align-items: center;
                img {
                    margin-right: 12px;
                }
            }
        }
        ._buttons {
            justify-content: center;
        }
    }
    .bg-dots {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: 1;
    }
    .play-video {
        border-radius: 100px;
        transform: scale(1.1);
        margin-right: 14px;
        position: relative;
        &:before {
            content: "";
            height: 2px;
            background: linear-gradient(90deg, transparent, transparent, transparent, transparent, var(--corp), #D659A0, #fff);
            width: 100vw;
            position: absolute;
            right: 100%;
        }
    }
    .img-text {
        display: flex;
        align-items: center;
        img {
            margin-right: 50px;
            max-width: 740px;
        }
        .side {
            .wrapper {
                display: flex;
                flex-direction: column;
                p {
                    margin-bottom: 24px;
                    margin-top: 8px;
                }
            }
        }
    }
    .teachers-block {
        .wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin: 0 20px 30px 0;
                b {
                    display: block;
                    margin: 14px 0 8px;
                }
            }
        }
    }
}

@media only screen and (max-width: 1440px) {
    .dark {
        padding: 54px;
    }
}

@media only screen and (max-width: 860px) {
    ._main_heading {
        text-align: left;
    }
}
</style>