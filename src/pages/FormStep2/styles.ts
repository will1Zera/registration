import styled from "styled-components";

export const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;

    p{
        font-size: 15px;
        color: #B8B8D4;
        margin-bottom: 40px;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 32px;
    }
    label{
        input{
            display: block;
            margin-top: 5px;
            margin-bottom: 20px;
            border-radius: 10px;
            border: none;
            color: #FFF;
            background-color: #524470;
            outline: 0;
            width: 300px;
            height: 40px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 15px
        }
        input::placeholder{
            color: #cfcfd6;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    button{
        color: #1F1B2F;
        background-color: #01F587;
        border-radius: 20px;
        font-size: 15px;
        cursor: pointer;
        height: 35px;
        width: 100px;
        font-weight: bold;
        margin-top: 20px;
        border: none;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 606px) {
        flex-direction: column;
    };
`;

export const FormCep = styled.div`
    display: flex;
    justify-content: flex-start;
    label{
        input{
            width: 540px;
            height: 40px;
            @media (max-width: 606px) {
                width: 240px;
            };
        }
    }
`;

export const Form1 = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 40px;
    label{
        input{
            width: 240px;
            height: 40px;
        }
    }
`;

export const Form2 = styled.div`
    display: flex;
    flex-direction: column;
    label{
        input{
            width: 240px;
            height: 40px;
        }
    }
`;

export const FormButton = styled.div`
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 606px) {
        flex-direction: row;
        padding-bottom: 80px;
    };
`;