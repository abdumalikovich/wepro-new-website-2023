<template>
  <div class="bottom-side lessons-list">
    <div
      class="lesson-item"
      v-for="item of data"
      :key="item.key"
      @click="
        openModalWindow({
          name: 'register',
          bg: true,
        })
      "
    >
      <span class="lesson-title _h4">{{ item }}</span>
      <span class="lesson-number">
        <span>Занятие {{ data.indexOf(item) + 1 }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  props: ["data"],
  methods: {
    ...mapMutations(["openModalWindow"]),
  }
};
</script>

<style scoped lang="scss">
@media only screen and (max-width: 860px) {
  .lessons-list {
      .lesson-item {
          cursor: pointer;
      }
  }
}
</style>
