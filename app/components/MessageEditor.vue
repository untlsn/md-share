<script setup lang="ts">
const text = defineModel<string>();
defineEmits<{
  (e: 'submit', payload: string): void;
}>();

const loadTextFile = async (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    text.value = e.target?.result as string;
  };
  reader.readAsText(file);
};
</script>

<template>
  <UiCard class="m-4">
    <UiCardContent>
      <UiLabel
        class="mb-2"
        for="text"
      >
        Kontent
      </UiLabel>
      <UiTextarea
        id="text"
        v-model="text"
      />
      <div class="flex justify-between mt-4">
        <UiButton
          variant="secondary"
          @click="$emit('submit', text || '')"
        >
          Wygeneruj link
        </UiButton>
        <ButtonedFileInput @change="loadTextFile" />
      </div>
    </UiCardContent>
  </UiCard>
</template>

<style scoped>
</style>
