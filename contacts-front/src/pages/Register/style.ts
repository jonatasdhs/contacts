import styled from "styled-components";

export const StForm = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    width: 300px;
    background-color: var(--color-blue-1);
    padding: 30px;
    border-radius: 8px;
    min-height: 300px;
    gap: 20px;
    

    & > form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
    }
`