export function copyData() {
  let copiedPath = $state<string | null>(null);

  async function copyText(textToCopy: string, path: string) {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copiedPath = path;
      setTimeout(() => {
        if (copiedPath === path) copiedPath = null;
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return {
    get copiedPath() {
      return copiedPath;
    },
    copyText,
  };
}