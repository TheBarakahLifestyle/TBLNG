import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        custom: {
            blue: "#254166",
            yellow: "#E9AE0A"
        }
      },
      fontFamily: {
        sans: ['Montserrat',  ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        merriweather: ['Merriweather', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        container: "1280px" //"1440px" //1280px
      }
    }
  }
}