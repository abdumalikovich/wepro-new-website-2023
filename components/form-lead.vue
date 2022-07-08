<template>
    <div class="form-register _filled">
        <div class="wrapper _width_small">
            <div class="side-left">
                <div class="_heading">
                    <span class="_h3">Оставить заявку</span>
                    <p>Оставьте свои контакты и получите бесплатную консультацию по курсу, программе и спикерам.</p>
                </div>
                <forms-consultation></forms-consultation>
            </div>
            <img class="_pc" src="~/static/img/register.jpg">
        </div>
    </div>
</template>

<style scoped lang="scss">
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

.form-register {
    background-color: var(--bg);
    .wrapper {
        background-color: #fff;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 0;
        padding-left: 0;
        position: relative;
    }
    .side-left {
        padding: 40px;
        width: 60%;
        ._heading {
            margin-top: 0;
            p {
                color: var(--black);
            }
        }
    }
    img {
        object-fit: cover;
        margin-left: 24px;
        position: absolute;
        height: 100%;
        width: 40%;
        right: 0;
    }
}

@media only screen and (max-width: 860px) {
    .form-register {
        .side-left {
            padding: 24px;
            width: 100%;
        }
    }
}
</style>
