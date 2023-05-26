import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-blue-1: #4285F4;
        --color-blue-2: #3B7CD2;
        --color-blue-3: #6AA6F8;

        --color-success: #168821;
        
        --color-gray-100: #333333;
        --color-gray-50: #828282;
        --color-gray-20: #E0E0E0;
        --color-gray-0: #F5F5F5;


    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: transparent;
    }
`;

export const Container = styled.main`
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 10px;
    background-color: var(--color-gray-100);
    display: flex;
    justify-content: center;
    align-items: center;
`