import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,
        description: string,
        htmlBackground: string,
        background: string,
        blue: string,
        skyBlue: string,
        darkGray: string,
        gray: string,
        gradient: string
    }
}
