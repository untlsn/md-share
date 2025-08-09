<script setup lang="ts">
defineEmits<{
  (e: 'change', payload: Event): void;
}>();
</script>

<template>
  <UiButton
    as-child
    v-bind="$attrs"
  >
    <UiLabel for="file">
      Załaduj plik
    </UiLabel>
  </UiButton>
  <UiInput
    id="file"
    type="file"
    hidden
    @change="$emit('change', $event)"
  />
</template>

<style scoped>
</style>
