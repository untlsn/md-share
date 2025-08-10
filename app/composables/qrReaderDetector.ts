export function useQrReaderDetector() {
  const router = useRouter();
  const abortController = new AbortController();

  onMounted(() => {
    let buffer = '';
    let lastTime = 0;

    window.addEventListener('keydown', (ev) => {
      const currentTime = Date.now();

      if (currentTime - lastTime > 100) {
        buffer = '';
      }

      lastTime = currentTime;

      if (ev.key === 'Enter') {
        const q = buffer.includes('q=') ? buffer.split('q=')[1] : buffer;

        router.push({
          query: { q },
        });
        buffer = '';
        return;
      }

      if (ev.key.length === 1) {
        buffer += ev.key;
      }
    }, { signal: abortController.signal });
  });

  onBeforeUnmount(() => {
    abortController.abort();
  });
}
