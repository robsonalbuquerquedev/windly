export {};

declare global {
  interface Window {
    gtag?: (
      command: "consent" | "config" | "js",
      action: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}
