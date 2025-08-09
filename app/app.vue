<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query';

const orpc = useOrpc();

const { query } = useRoute();

const { data: textData } = useQuery(
  orpc.getText.queryOptions({
    input: parseInt(query.q as string, 36),
  }),
);

const { mutate, data: newId } = useMutation(
  orpc.sendText.mutationOptions(),
);

const barcode = computed(() => {
  const id = textData.value?.id || newId.value;

  if (!id) return undefined;

  return id.toString(36);
});
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
    <UiCard
      v-if="barcode"
      class="m-4"
    >
      <BarcodeDisplay :value="barcode" />
    </UiCard>
  </div>
</template>
