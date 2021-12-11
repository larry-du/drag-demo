<template>
  <draggable
    v-model="dragData"
    tag="transition-group"
    chosenClass="chose"
    :component-data="{ tag: 'div', name: 'flip-list', class: 'levelBox' }"
    itemKey="name"
  >
    <template #item="{ element: list }">
      <div class="item">
        <slot name="levelItem" :levelData="list"></slot>
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "LevelDrag",
  components: {
    draggable,
  },
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    dragData: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.levelBox {
  display: flex;
}
.item {
  border: 1px solid;
  flex: 1 0 0;
}
.chose {
  background-color: lightblue;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
