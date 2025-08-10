<script setup lang="ts">
import QRCode from 'qrcode';

const props = defineProps<{
  value: string;
}>();

const barcodeDisplay = useTemplateRef('barcode-display');

onMounted(() => {
  watchEffect(() => {
    QRCode.toCanvas(barcodeDisplay.value, props.value);
  });
});
</script>

<template>
  <UiCard>
    <canvas
      ref="barcode-display"
      class="mx-auto"
    />
  </UiCard>
</template>

<style scoped>
</style>
