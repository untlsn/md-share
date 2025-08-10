export function useQrReaderDetector(onScan: (code: string) => void) {
  const scannedCode = ref('');
  let buffer = '';
  let lastTime = 0;

  function onKeydown(e: KeyboardEvent) {
    const currentTime = Date.now();

    if (currentTime - lastTime > 100) {
      buffer = '';
    }

    lastTime = currentTime;

    if (e.key === 'Enter') {
      scannedCode.value = buffer;
      onScan(buffer);
      buffer = '';
      return;
    }

    if (e.key.length === 1) {
      buffer += e.key;
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
  });
}
