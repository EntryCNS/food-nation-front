import "styled-components";

declare module "styled-components" {
    interface DefaultTheme {
        isDark: boolean,
        fontColor: string,
        description: string,
        htmlBackground: string,
        background: string,
        blue: string,
        red: string,
        skyBlue: string,
        darkGray: string,
        gray: string,
        gradient: string,
        scrollBar: string,
        subGradient: string
        border: string
    }
}
