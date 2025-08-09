<script setup lang="ts">
import JSBarcode from 'jsbarcode';

const props = defineProps<{
  value: string;
}>();

const barcodeDisplay = useTemplateRef('barcode-display');

onMounted(() => {
  watchEffect(() => {
    JSBarcode(barcodeDisplay.value, props.value);
  });
});
</script>

<template>
  <svg
    ref="barcode-display"
    class="mx-auto"
  >{{ '' }}</svg>
</template>

<style scoped>
</style>
