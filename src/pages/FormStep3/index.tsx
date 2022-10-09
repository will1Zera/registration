import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormAction } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () =>{
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() =>{
        if(state.name === ""){
            navigate('/');
        } else{
            dispatch({
                type: FormAction.setCurrentStep,
                payload: 3 
            }); 
        };
    }, [dispatch, navigate, state.name]);
    
    const handleStep = () =>{
        if(state.cvv > 0 && state.nomeCartao !== "" && state.numeroCartao > 0){
            console.log(state);
            alert("Cadastro feito com sucesso!");
        } else{
            alert("Preencha os dados!");
        }
        
    };

    const handleNomeCartao = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setNomeCartao,
            payload: e.target.value 
        });
    };

    const handleNumeroCartao = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setNumeroCartao,
            payload: e.target.value 
        });
    };

    const handleVencimento = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setData,
            payload: e.target.value 
        });
    };

    const handleCvv = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setCvv,
            payload: e.target.value 
        });
    };

    return(
        <Theme>
            <C.Container>
                <h1>Detalhes do pagamento</h1>
                <C.FormContainer>
                    <C.Form1>
                        <label>
                            Nome do cartão
                            <input type="text" value={state.nomeCartao} onChange={handleNomeCartao} />
                        </label>
                        <label>
                            Número do cartão
                            <input type="number" onChange={handleNumeroCartao} />
                        </label>
                        <C.Form3>
                            <label>
                                MM/AA
                                <input type="number" onChange={handleVencimento} />
                            </label>
                            <label>
                                CVC
                                <input type="number" onChange={handleCvv} />
                            </label>
                        </C.Form3>
                        <C.FormButton>
                            <button onClick={handleStep}>Finalizar</button>
                        </C.FormButton>
                    </C.Form1>
                    <C.Form2>
                        <C.Card>
                            <C.Flag />
                            <C.Card1>
                                <C.CardName>
                                    <span>{state.nomeCartao}</span>
                                </C.CardName>
                                <C.CardNumber>
                                    <span>{state.numeroCartao}</span>
                                </C.CardNumber>
                            </C.Card1>
                            <C.Card2>
                                <C.CardDate>
                                    <span>Validade</span>
                                    <span>{state.data}</span>
                                </C.CardDate>
                                <C.CardCvc>
                                    <span>CVC</span>
                                    <span>{state.cvv}</span>
                                </C.CardCvc>
                            </C.Card2>
                        </C.Card>
                        <C.CardShadow />
                    </C.Form2>
                </C.FormContainer>
            </C.Container>
        </Theme>
    );
};