import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);

    & > div {
        background-color: var(--color-blue-1);
        width: 400px;
        height: 400px;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


        & > form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-radius: 8px;
            padding: 30px;
            background-color: var(--color-gray-0);
    }
    }
    
`