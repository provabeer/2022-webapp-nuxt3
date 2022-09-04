import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600,700,800,900',
        serif: 'Lora',
      },
    }),
  ],
  transformers: [transformerDirective()],
})
