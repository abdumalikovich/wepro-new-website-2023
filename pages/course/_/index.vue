<template>
    <main id="page-course">
        <div v-if="allData.course.body._id" class="bg">
            <img :src="allData.course.body.preview" />
        </div>

        <div v-if="allData.course.body._id" class="title _width">
            <div class="wrapper">
                <div class="description">
                    <h2>{{ allData.course.body.title }}</h2>
                    <span class="_note" style="#fff">{{
                        allData.course.body.description
                    }}</span>

                    <course-price-block
                        v-if="allData.course.body.price > 0"
                        :price="allData.course.body.price"
                        :sale="0"
                    ></course-price-block>

                    <span v-else class="_h3">Bepul kurs</span>

                    <div
                        class="_buttons"
                    >
                        <button
                            class="style-5"
                            @click="buyCourse(course)"
                        >
                            Записаться на курс
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="_margin"></div>

        <div v-if="allData.course.body._id" class="_dotted_white teacher-blockquote">
            <div class="_width">
                <div class="_heading">
                    <span class="_h2">О препователе курса</span>
                </div>
                <p>{{ allData.course.body.teacherId.description }}</p>
                <div v-if="allData.course.body.teacherId" class="teacher">
                    <teacher-avatar :name="allData.course.body.teacherId.name" />
                    <div class="text">
                        <p>
                            {{
                                allData.course.body.teacherId.name
                            }}
                        </p>
                        <div class="_note">Преподаватель курса</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-about">
            <div class="_width">
                <div class="_heading">
                    <span class="_h2">Как проходят занятия</span>
                </div>
                <div class="wrapper">
                    <div class="item">
                        <img src="~/static/img/course/1.svg" />
                        <span>Курс основан на реальном опыте специалистов</span>
                    </div>
                    <div class="item">
                        <img src="~/static/img/course/2.svg" />
                        <span>Вебинары, чтобы ответить на ваши вопросы</span>
                    </div>
                    <div class="item">
                        <img src="~/static/img/course/3.svg" />
                        <span>12-месячный доступ ко всем материалам и сертификат курса</span>
                    </div>
                    <div class="item">
                        <img src="~/static/img/course/4.svg" />
                        <span>Смотрите онлайн лекции в любое время на компьютере или смартфоне</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="_margin-line"></div>

        <div class="course-suitable">
            <div class="_width">
                <div class="_heading">
                    <span class="_h2">Кому подойдет этот курс</span>
                </div>
                <div class="wrapper">
                    <div class="item">
                        <img src="~/static/img/course/suitable-1.svg" />
                        <span>Новички в этой области</span>
                        <p>Тем, кто никогда не сталкивался с профессией, но хочет с нуля приобрести новые востребованные навыки и сменить сферу деятельности.</p>
                    </div>
                    <div class="item">
                        <img src="~/static/img/course/suitable-2.svg" />
                        <span>Специалистам в смежных областях</span>
                        <p>Качайте свои профессиональные навыки. Совершенствуйтесь в этой области вместе с нашим курсом.</p>
                    </div>
                    <div class="item">
                        <img src="~/static/img/course/suitable-3.svg" />
                        <span>Другие специалисты</span>
                        <p>Дизайнеры, разработчики, маркетологи и все, кто интересуется программированием</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="_margin-line"></div>

        <div class="course-lessons-list _width">
            <div class="_heading">
                <span class="_h2">Программа курса</span>
            </div>
            <div v-if="allData.course.body._id" class="modules-list wrapper">
                <lessons-list
                    :data="{
                        lessons: allData.course.body.course_programm,
                        course: course,
                    }"
                ></lessons-list>
            </div>
        </div>

        <div class="_margin-line"></div>

        <div class="after-course _width">
            <div class="_heading">
                <span class="_h2">Что я смогу делать после курса</span>
            </div>
            <div class="wrapper">
                <div class="item">
                    <img src="~/static/img/course/suitable-7.svg" />
                    <span>Работать над проектами с нуля</span>
                    <p>Можно выполнять проекты различной сложности. Понимать потребности клиентов и пользователей.</p>
                </div>
                <div class="item">
                    <img src="~/static/img/course/suitable-4.svg" />
                    <span>Использование инструментов</span>
                    <p>Вы изучаете каждую программу с основ и выполняете учебные проекты, которыми вы можете дополнить портфолио.</p>
                </div>
                <div class="item">
                    <img src="~/static/img/course/suitable-5.svg" />
                    <span>Работать в IT</span>
                    <p>Рекламные агентства, веб-студии и крупные компании, где вы можете найти работу в отделах маркетинга и развития.</p>
                </div>
                <div class="item">
                    <img src="~/static/img/course/suitable-6.svg" />
                    <span>Получение заказов фрилансера</span>
                    <p>Вы поймете, как правильно структурировать и представлять проекты клиентам.</p>
                </div>
            </div>
        </div>

        <div class="_margin"></div>
    </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
    data() {
        return {
            title: "Страница курса | Wepro",
            description: "Страница курса"
        }
    },
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.description
				},
			],
		}
	},
    computed: {
        ...mapGetters(["modals", "allData"]),
    },
    methods: {
        ...mapActions([
            "GET_ONE_ELEMENT"
        ]),
    },
    mounted() {
        this.GET_ONE_ELEMENT({ key: "course", id: this.$route.params.pathMatch })
            .then(() => {
                this.title = this.allData.course.body.title
                this.description = this.allData.course.body.description
            })
    },
};
</script>

<style lang="scss">
:root {
    --accent: #4552b4;
    --corp: #2b41f0;
    --bg: #f1f6fb;
    --black: #10162f;
    --grey: #7c828d;
    --yellow: #f8d548;
}

#page-course {
    background-color: var(--black);
    color: #fff;

    .wrapper-vertical {
        .item {
            background-color: #fff;
            color: var(--black);
            border-radius: 8px;
        }
    }

    .teacher-blockquote,
    .course-about,
    .course-suitable,
    .course-lessons-list,
    .modules-list,
    .projects-block,
    .money-back-block,
    .ready-to-start-block {
        position: relative;
        z-index: 1;
    }

    .after-course {
        .wrapper {
            .item {
                img {
                    padding: 44px;
                }
            }
        }
    }

    .course-suitable,
    .after-course {
        .wrapper {
            display: flex;
            position: relative;
            flex-direction: row;
            align-items: stretch;
            justify-content: space-between;
            flex-grow: 1;
            flex-shrink: 0;

            .item {
                flex: 1;
                margin-right: 24px;
                display: flex;
                position: relative;
                flex-direction: column;
                align-items: stretch;
                justify-content: flex-start;
                padding: 48px 32px;
                box-sizing: border-box;
                background: rgb(255, 255, 255);
                box-shadow: rgb(0 0 0 / 3%) 0px 4px 50px;
                border-radius: 23px;
                color: var(--black);

                span {
                    font-size: 22px;
                    font-weight: 600;
                    display: block;
                    margin-bottom: 12px;
                }

                img {
                    width: 132px;
                    height: 132px;
                    background-color: var(--bg);
                    border: 2px solid var(--accent);
                    border-radius: 23px;
                    margin-bottom: 24px;
                }
            }
        }
    }

    .course-about {
        .wrapper {
            display: flex;
            flex-wrap: wrap;

            .item {
                display: flex;
                align-items: center;
                margin: 0 24px 24px 0;

                img {
                    width: 52px;
                    height: 52px;
                    margin-right: 12px;
                    background-color: var(--bg);
                    border-radius: 5px;
                    padding: 10px;
                }

                width: calc(50% - 24px);
                font-size: 18px;
                font-weight: 500;
            }
        }
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1;
        overflow: hidden;

        img {
            width: 100%;
            position: absolute;
            height: 100%;
            object-fit: cover;
            filter: blur(6px);
            transform: translateY(0%) scale(1.02);
        }

        &::after {
            background-size: 100% 6.625rem, auto;
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            background-image: -webkit-linear-gradient(
                    top,
                    rgba(16, 22, 47, 0.75),
                    transparent
                ),
                -webkit-linear-gradient(top, rgba(16, 22, 47, 0.4), #10162f);
            background-image: linear-gradient(
                    180deg,
                    rgba(16, 22, 47, 0.75),
                    transparent
                ),
                linear-gradient(180deg, rgba(16, 22, 47, 0.4), #10162f);
            background-size: 100% 5rem, auto;
            background-repeat: no-repeat, no-repeat;
        }
    }

    a {
        color: #fff;
    }

    .title {
        .wrapper {
            display: flex;
            align-items: center;
        }

        padding-top: 170px;
        position: relative;
        z-index: 1;

        .info {
            background-color: #fff;
            padding: 24px;
            border-radius: 10px;
            position: relative;
            z-index: 1;

            .item {
                ._note {
                    display: block;
                    margin-bottom: 5px;
                    color: var(--black);
                }

                .list {
                    margin-bottom: 14px;
                    display: flex;
                    flex-wrap: wrap;

                    span {
                        margin-bottom: 5px;
                    }
                }
            }

            .iframe {
                border-radius: 11px;
                width: 433px;
                height: calc(433px / 16 * 9);
                position: relative;

                iframe,
                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .description {
            margin-left: 80px;

            ._note {
                opacity: 0.7;
                display: block;
                margin: 24px 0;
                color: #fff !important;
            }

            button {
                margin-top: 20px;
            }
        }
    }

    .course-edge {
        position: absolute;
        left: 0;
        top: 60px;
        z-index: 0;
    }

    .modules-list {
        .item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 40px;
            margin-bottom: 40px;
            cursor: pointer;

            .top-side {
                .module-title {
                    display: flex;
                    align-items: center;

                    ._h3 {
                        margin-right: 14px;
                        display: block;
                    }
                }

                .module-description {
                    margin-top: 14px;
                    color: var(--grey);
                }
            }

            .lessons-list {
                margin-top: 22px;
            }

            &:last-child {
                padding-bottom: 0;
                border: none;
            }
        }
    }

    .money-back-block {
        display: flex;
        align-items: center;

        ._heading {
            margin-top: 0;
            margin-bottom: 0;
        }

        img {
            margin-left: 50px;
        }
    }

    .ready-to-start-block {
        .wrapper {
            display: flex;
            justify-content: center;

            .item {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 33%;
                margin: 0 12px;
                background: #292c30;
                border-radius: 20px;
                float: left;
                overflow: hidden;
                position: relative;
                text-align: center;
                padding: 44px 34px;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                transition: 0.45s;
                cursor: pointer;
                background: linear-gradient(
                    135deg,
                    var(--corp) 0,
                    #8d12fa 100%
                );
                transition: 0.3s ease;

                &:hover {
                    transform: translateY(-5px);

                    &.passive {
                        transform: translateY(0);
                    }

                    .not-active {
                        opacity: 1;
                    }
                }

                .not-active {
                    transition: 0.3s ease;
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    flex-direction: column;
                    opacity: 0;
                }

                button {
                    margin-top: 24px;
                }

                ._note {
                    opacity: 0.67;
                }

                img {
                    width: 66px;
                    height: 36px;
                }

                ._h3 {
                    margin-top: 12px !important;
                    display: block;
                    margin-bottom: 12px !important;
                }

                ._h4 {
                    display: block;
                    font-size: 22px;
                    line-height: 1.1;
                    font-weight: 600 !important;
                    margin: 0 !important;
                    margin: 0;
                }

                button,
                a {
                    width: 100%;
                }

                ul {
                    margin: 16px 0;

                    li {
                        color: #fff !important;
                        line-height: 1.5;
                    }
                }

                &:nth-child(2) {
                    background: linear-gradient(
                        135deg,
                        #d7b899 0,
                        #a87446 100%
                    );
                }

                &:nth-child(3) {
                    background: linear-gradient(
                        135deg,
                        var(--black) 0,
                        #10162f 100%
                    );
                }
            }
        }
    }

    @media only screen and (max-width: 1440px) {
        .title {
            padding-top: 100px;

            .description {
                margin-left: 50px;
            }
        }
        .course-suitable .wrapper .item,
        .after-course .wrapper .item {
            padding: 32px;

            img {
                width: 100px;
                height: 100px;
            }
        }
        .after-course .wrapper .item img {
            padding: 34px;
        }
    }
}

@media only screen and (max-width: 860px) {
    #page-course {
        .module-title {
            flex-direction: column;
            align-items: flex-start !important;

            .module-info {
                margin-top: 12px;
            }
        }

        .course-suitable .wrapper .item,
        .after-course .wrapper .item {
            padding: 32px;

            span {
                font-size: 18px;
            }

            img {
                width: 64px;
                height: 64px;
            }

            .after-course .wrapper .item img {
                padding: 20px;
            }
        }

        .after-course .wrapper .item img {
            padding: 20px;
        }

        .course-about {
            .wrapper {
                display: flex;
                flex-direction: column;

                .item {
                    width: 100%;
                }
            }
        }

        .title {
            padding-top: 40px;

            .info {
                width: 100%;

                .iframe {
                    margin-top: 24px;
                    width: 100%;
                }
            }
        }

        .wrapper {
            .info {
                background-color: transparent;
                padding: 0;

                .item {
                    display: none;
                }
            }
        }

        .title .wrapper {
            flex-direction: column-reverse;

            .description {
                margin-left: 0;
            }
        }

        .course-suitable .wrapper,
        .after-course .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;

            .item {
                padding: 18px;
                margin: 0 12px 12px 0;

                p {
                    font-size: 14px;
                }
            }
        }
    }
}

//     #page-course {
//         .ready-to-start-block {
//             text-align: left;
//         }
//         .mobile-heading {
//             margin-top: 120px;
//             text-align: center;
//             display: flex!important;
//             position: relative;
//             align-items: center;
//             z-index: 1;
//             flex-direction: column;
//             .preview {
//                 width: 200px;
//                 height: 200px;
//                 object-fit: cover;
//             }
//             .description {
//                 margin-bottom: 24px;
//             }
//             h1 {
//                 text-align: center;
//                 margin: 16px 0 24px;
//             }

//         }
//         .title {
//             flex-direction: column;
//         }
//         .title .info {
//             .iframe {
//                 width: 100%;
//             }
//         }
//         .lessons-list, .projects-list {
//             grid-template-columns: 1fr 1fr;
//             a {
//                 .lesson-item {
//                     margin-right: 12px!important;
//                     margin-bottom: 12px!important;
//                 }
//             }
//         }
//         .modules-list {
//             .module-title {
//                 ._fill {
//                     display: none;
//                 }
//                 ._h3 {
//                     margin-right: 0!important;
//                 }
//             }
//         }
//     }
// }
</style>
