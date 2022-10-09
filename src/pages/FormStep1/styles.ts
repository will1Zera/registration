import styled from "styled-components";

export const Container = styled.div`
    padding-left: 25px;
    padding-right: 25px;

    p{
        font-size: 15px;
        color: #B8B8D4;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 32px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #80D6C0;
        margin: 30px 0;
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
            font-size: 15px;

            @media (max-width: 369px) {
                width: 220px;
            };

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
        @media (max-width: 369px) {
            margin-bottom: 80px;
        };
    }
`;