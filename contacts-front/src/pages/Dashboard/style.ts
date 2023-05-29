import styled from "styled-components";

export const StDiv = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: var(--color-blue-1);
    border-radius: 8px;
    padding: 20px;
`

export const StUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    margin: 15px;
    border-radius: 8px;
    background-color: var(--color-gray-0);

`

export const StList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 15px;
    border-radius: 8px;
    background-color: var(--color-gray-100);
    overflow: auto;
    gap: 2px;

    & li {
        background-color: var(--color-gray-0);
        width: 100%;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`