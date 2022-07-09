<template>
    <div class="courses-list">
        <nuxt-link :to="'/course/' + item.url" v-for="item of list" :key="item.key">
            <div class="item">
                <div class="side-left">
                    <img v-if="item.teacherId.avatar_url" :src="item.teacherId.avatar_url">
                    <teacher-avatar v-else :name="item.teacherId.name"></teacher-avatar>

                    <span class="teacher-name">{{ item.teacherId.name }}</span>
                    <span class="teacher-position">Преподаватель курса</span>
                </div>
                <div class="side-right">
                    <div class="top">
                        <span class="_fill corp">{{ item.course_programm.length }} уроков</span>
                        <span class="_fill">{{ item.course_programm.length * 90 }} минут</span>

                        <span class="_h3">{{ item.title }}</span>
                        <p class="_pc course-description">{{ item.description }}</p>
                        <p class="_mobile course-description">{{ item.description.slice(0, 90) + "..." }}</p>

                        <client-only>
                            <div class="_buttons">
                                <button class="style-4">
                                    <span>Подробнее</span>
                                </button>
                            </div>
                        </client-only>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
    props: [
        "list"
    ],
}
</script>

<style lang="scss">
.courses-list {
    display: grid;
    grid-template-columns: 1fr;
    a {
        margin-right: 0!important;
    }
    .item {
        background-color: var(--bg);
        padding: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid transparent;
        transition: .3s linear;
        border-radius: 8px;
        &:hover {
            background-color: #fff;
            box-shadow: 15px 15px 30px rgb(0 0 0 / 10%);
            border: 2px solid var(--accent);
            .side-left {
                img {
                    border: 2px solid var(--accent);
                }
            }
        }
        .side-left {
            min-width: 140px;
            white-space: nowrap;
            img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 100px;
                border: 2px solid transparent;
                transition: .3s linear;
            }
            .teacher-name {
                font-weight: 700;
                font-size: 14px;
                display: block;
                margin: 14px 0 4px;
            }
            .teacher-position {
                font-size: 14px;
                color: var(--accent);
                display: block;
            }
        }
        .side-right {
            padding-left: 60px;
            width: 100%;
            .top {
                ._h3, ._h2 {
                    margin: 18px 0 4px;
                    display: block;
                }
                .course-description {
                    color: var(--grey);
                }
            }
            ._buttons {
                width: max-content;
            }
        }
    }
}

.toggle-list {
    background-color: var(--bg);
    padding: 6px;
    border-radius: 24px;
    margin-bottom: 24px;
    margin-top: -14px;
    display: flex;
    width: max-content;
    white-space: nowrap;
    span {
        padding: 6px 8px;
        color: #607987;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        align-items: center;
        display: flex;
        img {
            margin-right: 6px;
            width: 20px;
            height: 20px;
        }
        &.active {
            font-size: 16px;
            background-color: #fff;
            border-radius: 100px;
            color: #10162F;
            font-weight: 700;
        }
    }
}

.courses-list {
    a {
        margin: 0 21px 21px 0;
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
}

@media only screen and (max-width: 860px) {
    .wrapper-vertical .item {
        padding: 16px;
        button {
            img {
                display: none;
            }
        }
        .side-left {
            min-width: 100px;
            white-space: pre-wrap;
            img {
                width: 60px;
                height: 60px;
            }
            .teacher-position {
                font-size: 12px;
            }
        }
        .side-right {
            padding-left: 16px;
            ._fill {
                display: inline-block;
            }
            .top {
                .course-description {
                    display: none;
                }
            }
        }
    }
}
</style>
