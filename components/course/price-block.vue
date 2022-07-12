<template>
    <div class="price-block">
        <div class="discount">
            <span class="_h3" style="text-decoration: line-through">{{ Number(price + (price / 100 * 25)).toLocaleString() }} сум</span>
            <div class="_fill red">СКИДКА -{{ 25 + sale }}%</div>
        </div>
        <span class="_h1">{{ price.toLocaleString() }} сум</span>
    </div>
</template>

<script>
export default {
    props: ["price", "sale"]
}
</script>

<style scoped lang="scss">
.price-block {
    margin-top: 14px;
    .discount {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
        ._h3 {
            margin: 14px 14px 14px 0!important;
        }
        ._fill {
            display: inline-block;
        }
    }
}
</style>