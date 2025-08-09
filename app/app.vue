<script setup lang="ts">
const message = ref('');

const loadTextFile = async (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    message.value = e.target?.result as string;
  };
  reader.readAsText(file);
};

const showBarcode = ref(false);
</script>

<template>
  <div>
    <h1 class="m-6 text-2xl">
      MD Share
    </h1>
    <UiCard class="m-4">
      <UiCardContent>
        <UiLabel
          class="mb-2"
          for="message"
        >
          Kontent
        </UiLabel>
        <UiTextarea v-model="message" />
        <div class="flex justify-between mt-4">
          <UiButton
            variant="secondary"
            @click="showBarcode = true"
          >
            Wygeneruj link
          </UiButton>
          <ButtonedFileInput @change="loadTextFile" />
        </div>
      </UiCardContent>
    </UiCard>
    <UiCard
      v-if="showBarcode"
      class="m-4"
    >
      <BarcodeDisplay value="Barcode" />
    </UiCard>
  </div>
</template>
