import styled from "styled-components";

export const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;

    h1{
        margin: 0;
        margin-bottom: 40px;
        font-size: 32px;
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
    label{
        font-size: 15px;
        input{
            display: block;
            margin-top: 5px;
            margin-bottom: 20px;
            border-radius: 10px;
            border: 2px solid #80D6C0;
            color: #FFF;
            background-color: #1F1B2F;
            outline: 0;
            width: 300px;
            height: 40px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 15px
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 100px;
    @media (max-width: 806px) {
        flex-direction: column-reverse;
        gap: 0px;
    };
`;

export const Form1 = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 806px) {
        margin-top: -110px;
    };
    label{
        input{
            width: 240px;
            height: 40px;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`;

export const Form2 = styled.div`
    color: #FFF
`;

export const Form3 = styled.div`
    display: flex;
    gap: 14px;
    label{
        input{
            width: 85px;
            height: 40px;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`;

export const FormButton = styled.div`
    display: flex;
    flex-direction: flex-start;
    @media (max-width: 806px) {
        padding-bottom: 80px;
    };
`;

export const Card = styled.div`
    position: relative;
    width: 330px;
    height: 180px;
    border-radius: 20px;
    padding: 15px;
    color: #FFF;
    background-image: linear-gradient(to bottom, #00b33e, #069f2f, #068c20, #047911, #006700);
    z-index: 2;
    @media (max-width: 806px) {
        width: 250px;
        height: 130px;
    };
`;

export const CardNumber = styled.div`
    margin-bottom: 15px;
`;

export const CardName = styled.div`
    margin-bottom: 5px;
    margin-top: 15px;
`;

export const CardDate = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardCvc = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Card1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 806px) {
        font-size: 13px;
        gap: 2px;
    };
`;

export const Card2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 230px;
    font-size: 13px;
    @media (max-width: 806px) {
        font-size: 11px;
        gap: 175px;
    };
`;

export const Flag = styled.div`
    background-image: url('https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png');
    width: 90px;
    height: 45px;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 806px) {
        width: 80px;
        height: 30px;
    };
`;

export const CardShadow = styled.div`
    width: 330px;
    height: 200px;
    border-radius: 20px;
    background-color: #003900;
    position: relative;
    top: -175px;
    left: 60px;
    z-index: 1;
    @media (max-width: 806px) {
        width: 260px;
        height: 140px;
        top: -120px;
        left: 45px;
        margin-bottom: 20px;
    };
`;