<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="container">
    <levelDrag
      :modelValue="$store.getters.menuList"
      @update:modelValue="$store.commit('menuList', $event)"
    >
      <template #levelItem="{ levelData }">
        <div class="title">{{ levelData.name }}</div>
        <verticalDrag
          :modelValue="levelData.children"
          @update:modelValue="updateSecondList(levelData.id, $event)"
        >
          <template #verticalItem="{ verticalData }">
            <div class="innerTitle">
              {{ verticalData.title }}
            </div>
          </template>
        </verticalDrag>
      </template>
    </levelDrag>
  </div>
</template>

<script>
import levelDrag from "./components/LevelDrag.vue";
import verticalDrag from "./components/VerticalDrag.vue";

export default {
  name: "App",
  components: {
    levelDrag,
    verticalDrag,
  },
  methods: {
    updateSecondList(id, event) {
      const allData = [...this.$store.getters.menuList];
      const menuIndex = allData.findIndex((data) => data.id === id);
      allData[menuIndex].children = event;
      this.$store.commit("menuList", allData);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 80%;
  margin: 0 auto;
}

.title {
  background-color: rgb(74, 33, 223);
  color: #fff;
}
</style>
