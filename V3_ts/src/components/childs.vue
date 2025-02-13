<template>
  <div>
    v-model父子组件双向绑定值： {{ FCModel }}
    <div>
      <el-button type="primary" @click="clickAddobj5">子组件修改值</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, defineProps } from "vue";

let props = defineProps({
  FCModel: {
    type: String,
    default: "",
  },
});
const { FCModel } = toRefs(props);

const emit = defineEmits(['update:FCModel']);

function clickAddobj5() {
  emit("update:FCModel","子组件修改值")
}
</script>