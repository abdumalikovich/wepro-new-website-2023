<template>
    <div id="page-login" class="auth-page">
        <div class="_main_heading">
            <div class="_width">
                <h1>Открытый урок</h1>
                <p>На открытых уроках можно бесплатно узнать о курсах, пообщаться с преподавателями и увидеть центр, в котором вы можете учиться</p>

                <div class="_margin-line"></div>

                <div class="form">
                    <div class="form-element">
                        <forms-open-lesson></forms-open-lesson>
                    </div>

                    <p class="_note">Yangimisiz? <nuxt-link to="/forms/register"><span class="_link">Ro'yxatdan o'tish</span></nuxt-link></p>
                </div>
            </div>
        </div>
    </div>
</template>
