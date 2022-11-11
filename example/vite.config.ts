import { defineConfig } from 'vite'
import { shopPlugin } from '@uxshop/storefront-core/dist/plugin/shop-vite'
import config from './shop-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [shopPlugin(config)]
})
