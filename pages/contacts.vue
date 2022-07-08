<template>
    <div id="page-contact">
		<headerComponent :light="true"/>

        <div class="_main_heading light">
            <div class="_width">
                <span class="_note">Наш адрес</span>
                <h1>Самарканд, ул. Мархабо 52</h1>

                <div class="wrapper">
                    <div class="item">
                        <span class="_note">Контакты</span>
                        <a href="tel:+998 (90) 197-71-00">
                            <span class="_h2">+998 (90) 197-71-00, Маржона</span>
                        </a>
                    </div>

                    <div class="item">
                        <span class="_note">Социальные сети</span>
                        <div class="social">
                            <a target="_blank" href="https://instagram.com/wepro.uz"><img src="~/static/img/instagram.png"></a>
                            <a target="_blank" href="https://www.facebook.com/wepro.uz"><img src="~/static/img/facebook.png"></a>
                            <a target="_blank" href="https://t.me/weprouz"><img src="~/static/img/telegram.png"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#page-contact {
    .wrapper {
        .item {
            margin-top: 24px;
            ._note {
                display: block;
                padding-bottom: 4px;
            }
            a {
                img {
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>
