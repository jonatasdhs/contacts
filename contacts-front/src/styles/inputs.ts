import styled from "styled-components";

export const StInput = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 8px;
    outline: none;
    padding: 0 12px;
    font-size: 16px;
    border-style: solid;
    border-color: var(--color-grey-100);

    &:focus {
        outline: none;
    }


`

export const StError = styled.span`
    color: white;
    padding-left: 8px;
    font-size: 12px;

`