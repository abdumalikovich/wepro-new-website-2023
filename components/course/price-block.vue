<template>
    <div class="price-block">
        <div class="discount">
            <span class="_h3" style="text-decoration: line-through">{{ Number(price * 2).toLocaleString() }} so'm</span>
            <div class="_fill red">CHEGIRMA -{{ 50 + sale }}%</div>
        </div>
        <span class="_h2">{{ Number(price - (price / 100 * sale)).toLocaleString() }} so'm</span>
    </div>
</template>

<script lang="ts">
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
        margin-bottom: 14px;
        ._h3 {
            margin: 14px 14px 14px 0!important;
        }
        ._fill {
            display: inline-block;
        }
    }
}
</style>