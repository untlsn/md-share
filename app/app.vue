<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useLocalStorage } from '@vueuse/core';

const orpc = useOrpc();

const route = useRoute();


const { data: textData } = useQuery(computed(() => {
  return orpc.getText.queryOptions({
    input: parseInt(route.query.q as string, 36),
  });
}));

const { mutate, data: newId } = useMutation(
  orpc.sendText.mutationOptions(),
);

const barcode = computed(() => {
  const id = textData.value?.id || newId.value;

  if (!id) return undefined;

  return id.toString(36);
});

const fullURL = computed(() => {
  return `${location.host}?q=${barcode.value}`;
});

const tab = useLocalStorage('tab', 'barcode-id');
useQrReaderDetector();
</script>

<template>
  <div>
    <h1 class="m-6 text-2xl">
      MD Share
    </h1>
    <MessageEditor
      :model-value="textData?.text"
      @submit="mutate"
    />
    <UiTabs
      v-if="barcode"
      v-model="tab"
      class="m-4"
    >
      <UiTabsList>
        <UiTabsTrigger value="barcode-id">
          Barcode ID
        </UiTabsTrigger>
        <UiTabsTrigger value="barcode-url">
          Barcode URL
        </UiTabsTrigger>
        <UiTabsTrigger value="qr-url">
          QR URL
        </UiTabsTrigger>
      </UiTabsList>
      <UiTabsContent value="barcode-id">
        <LazyBarcodeDisplay :value="barcode" />
      </UiTabsContent>
      <UiTabsContent value="barcode-url">
        <LazyBarcodeDisplay :value="fullURL" />
      </UiTabsContent>
      <UiTabsContent value="qr-url">
        <LazyQrDisplay :value="fullURL" />
      </UiTabsContent>
    </UiTabs>
  </div>
</template>
