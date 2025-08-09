<script setup lang="ts">
import JSBarcode from 'jsbarcode';

const props = defineProps<{
  value: string;
}>();

const canvas = useTemplateRef('canvas');

onMounted(() => {
  watchEffect(() => {
    JSBarcode(canvas.value, props.value);
  });
});
</script>

<template>
  <canvas
    ref="canvas"
    class="mx-auto"
  />
</template>

<style scoped>
</style>
