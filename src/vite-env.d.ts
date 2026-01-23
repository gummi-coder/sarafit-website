/// <reference types="vite/client" />

// Meta Pixel (Facebook Pixel) TypeScript declaration
interface Window {
  fbq: (
    action: string,
    event: string,
    params?: Record<string, unknown>
  ) => void;
}
