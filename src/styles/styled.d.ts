import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme{
    title: string,

    icon: string,

    colors: {
      primary: {
        buttonSelectedColor: string,
        checkBgColor: string
      },
      secondary: {
        bgColor: string,
        bgCardColor: string,
        letterColor: string,
        buttonHoverColor: string,
        buttonColor: string,
        placeholderColor: string,
      }
}
    bgImageDesktop: string,
    bgImageMobile: string
  }
}