<template>
    <div class="numbers _width_small">
        <div class="_heading">
            <span class="_h2">Biz noyob platformani taklif qilamiz</span>
        </div>
        <div class="wrapper">
            <div>
                <span class="number">01</span>
                <span class="_h3">Yo'nalishni tanlang</span>
                <p>Boshlash uchun mos kursni tanlang yoki yordam xizmatiga murojaat qiling. Biz har doim sizga yordam beramiz.</p>
            </div>
            <div>
                <span class="number">02</span>
                <span class="_h3">Kurslarni o'zingizga qulay vaqtda o'rganing</span>
                <p>Kurslar har doim talabalar panelida mavjud. Kun yoki tunning istalgan vaqtida o'rganing.</p>
            </div>
            <div>
                <span class="number">03</span>
                <span class="_h3">Diplom ishingizni topshiring</span>
                <p>Pro-kurslardan tekshiruvlar asosida o`ting , platforma va ustoz mentorlarning fikr-mulohazalarni oling</p>
            </div>
            <div>
                <span class="number">04</span>
                <span class="_h3">Ish toping yoki Wepro bilan ishlang</span>
                <p>Bizning "Bandlik markazi"miz eng yaxshi o'quvchilarni O'zbekistonning top kompaniyalariga ishga joylatirishga yordam beradi. Harakat qiling va yaxshi joylarni egallang.</p>
            </div>
            <div>
                <span class="number">05</span>
                <span class="_h3">O'zingiz orzu qilgan hayotda yashang</span>
                <p>Agar siz bu haqida o'ylab ko'rsangiz, hammasi juda oddiy. Biz bilan davr talabi mutahassisiga aylaning va IT bozorda yaxshiroq takliflarga ega bo'ling.</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.numbers {
    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        div {
            margin: 0 55px 55px 0;
            span {
                display: block;
            }
            .number {
                font-size: 104px;
                font-weight: 800;
                font-family: "Road Radio", sans-serif;
                color: var(--corp);
            }
            p {
                color: var(--grey);
            }
            ._h3 {
                margin-bottom: 8px;
            }
        }
    }
}

@media only screen and (max-width: 1440px) {
    .numbers .wrapper div {
        margin: 0 24px 24px 0;
    }
}

@media only screen and (max-width: 860px) {
    .numbers .wrapper div .number {
        font-size: 56px;
    }
}
</style>
