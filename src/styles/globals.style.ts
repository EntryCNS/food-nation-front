import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      html{
        height:100%;
      }
      div{
        background-color:${(props) => props.theme.background};
        
      }
      #__next{
        background-color:${(props) => props.theme.htmlBackground};
      }
      body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6{
        font-family:'Maven Pro', sans-serif;
        color:${(props) => props.theme.title}
      }
      p{
        color:${(props) => props.theme.description}
      }

      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }
    `

export default GlobalStyle