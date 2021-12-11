<template>
  <draggable
    v-model="dragData"
    tag="transition-group"
    :component-data="{ tag: 'div', name: 'flip-list', class: 'verticalBox' }"
    item-key="id"
  >
    <template #item="{ element: list }">
      <div class="item">
        <slot name="verticalItem" :verticalData="list"></slot>
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "VerticalDrag",
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
.item {
  border: 1px solid;
  flex: 1 0 0;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
