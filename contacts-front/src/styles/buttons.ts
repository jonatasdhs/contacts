import styled, {css} from "styled-components";

interface iButton {
    buttonSize?: "default" | "medium"
    buttonColor?: "primary" | "success"
  }

export const StButton = styled.button`
    border-radius: 8px;
    transition: .4s;
    font-size: 16px;
    display: flex;
    border: 2px solid;
    justify-content: center;
    align-items: center;
    &:disabled {
        background-color: var(--color-grey-20);
        color: var(--color-grey-50);
        border-color: var(--color-grey-20);
    };

    ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 20px;
          height: 30px;
        `;
      case "medium":
        return css`
          padding: 10px 20px;
          height: 40px;
        `;
        // no default
    }
  }}

${({ buttonColor }: iButton) => {
    switch(buttonColor) {
        case "primary":
            return css`
                background-color: var(--color-primary);
                border-color: var(--color-primary);
                color: #FFFFFF;
                &:hover {
                    background-color: var(--color-primary-50);
                    border-color: var(--color-primary-50);
                }
            `
        case "success": 
            return css`
                background-color: var(--color-success);
                border-color: var(--color-gray-100);
                color: var(--color-gray-0);
            `
        // no default
    }
  }}

`