import styled from "styled-components";

export const StDiv = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: var(--color-blue-1);
    border-radius: 8px;
    padding: 20px;

    & > div {
        display: flex;
        justify-content: space-between;

        & > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 15px;
        }
        & button {
            background-color: var(--color-gray-0);
            width: 24px;
            height: 24px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
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