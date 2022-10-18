import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default (data) => {
  return defineConfig({
    base: data.mode === "development" ? "/" : "/mind-diary-web-vue/",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  })
}
