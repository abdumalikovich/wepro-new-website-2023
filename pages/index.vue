<template>
    <main id="page-home">
        <div class="_main_heading">
            <div class="_width">
                <h1 class="_pc">С нуля до PRO в самой крупной IT-школе в Самарканде</h1>
                <h1 class="_mobile">Ta'lim platformasi</h1>
                <p class="description">4 месяца и вы готовый к работе специалист. Доступно. Качественно. По авторским методикам и постоянным контактом с преподавателем. Курсы по программированию, маркетингу, SMM, 3D-моделированию и графическому дизайну.</p>
                
                <div class="_buttons">
                    <nuxt-link to="/me">
                        <button class="style-2">Записаться на курс</button>
                    </nuxt-link>
                    <nuxt-link to="/courses">
                        <button class="style-1">Бесплатный урок</button>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="all-courses _width">
            <div class="_heading">
                <span class="_h2">Успейте записаться в новые группы</span>
            </div>
            <div class="wrapper">
                <client-only>
                    <courses-list v-if="courses.length" :list="JSON.parse(JSON.stringify(courses)).filter(item => item.price == 0)"/>
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
                <courses-list :list="JSON.parse(JSON.stringify(courses)).filter(item => item.price > 0)" v-if="courses.length"/>
                <loading-courses v-else/>
            </div>
        </div>

        <form-component></form-component>

        <numbers-block></numbers-block>

        <div class="_pc">
            <div class="_width_small">
                <div class="_heading">
                    <span class="_h2">Как проходят занятия</span>
                </div>
                <div class="about-platform img-text">
                    <div class="side">
                        <div class="_heading">
                            <span class="_h3">Biz siz bilan bo'lamiz va sizni yarim yo'l to'xtab qolishingizga qo'ymaymiz.</span>
                        </div>
                        <div class="wrapper">
                            <p>O'sib va rivojlanib kelayotgan insonlar qatoriga  qo'shiling: kashfiyotlar bilan o'rtoqlashing, tajriba almashing, ilhom oling va hamfikrlardan yordam oling.</p>
                        </div>
                    </div>

                    <img src="~/static/img/about-us-1.png" width="350" class="preview">
                </div>
            </div>

            <div class="_margin"></div>

            <div class="about-platform about-platform-2 _width_small img-text reverse">
                <img src="~/static/img/about-platform.png" width="350" class="preview">
                
                <div class="side">
                    <div class="_heading">
                        <span class="_h3">Platforma haqida</span>
                    </div>
                    <div class="wrapper">
                        <span class="_h4">Analitika - o`qish davomida</span>
                        <p>Bizning platformamiz foydalanuvchilarni o'rganishga chuqur integratsiyalangan. Sizga qachon o'qish yaxshiroq ekanligini va qachon tanaffus qilish kerakligini aytib beradi</p>

                        <span class="_h4">Interaktiv</span>
                        <p>Platformada muayyan harakatlar uchun ball to'plang va sotib olinmaydigan yopiq kurslarga ega bo`ling.</p>

                        <span class="_h4">Barcha talabalar o'rtasida xakaton va musobaqalar</span>
                        <p>Platformada talabalar o'rtasidagi musobaqalarda ishtirok eting va eng yaxshi talabalar qatoriga kiring.</p>
                    </div>
                </div>
            </div>
        </div>

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

<script lang="ts">
import {mapActions, mapMutations, mapState} from "vuex"

export default {
    data() {
        return {
            courses: []
        }
    },
    methods: {
        ...mapMutations(["openModalWindow"]),
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