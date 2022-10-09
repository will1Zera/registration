import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormAction } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep2 = () =>{
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() =>{
        if(state.name === ""){
            navigate('/');
        } else{
            dispatch({
                type: FormAction.setCurrentStep,
                payload: 2 
            }); 
        };
    }, []);
    
    const handleStep = () =>{
        if(state.cep > 0 && state.casa > 0 && state.estado !== "" && state.rua !== ""){
            navigate('/step3');
        } else{
            alert("Preencha os dados!");
        }
        
    };

    const handleCep = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setCep,
            payload: e.target.value 
        });
    };

    const handleRua = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setRua,
            payload: e.target.value 
        });
    };

    const handleComplemento = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setComplemento,
            payload: e.target.value 
        });
    };

    const handleCidade = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setCidade,
            payload: e.target.value 
        });
    };

    const handleNumero = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setCasa,
            payload: e.target.value 
        });
    };

    const handleBairro = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setBairro,
            payload: e.target.value 
        });
    };

    const handleEstado = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setEstado,
            payload: e.target.value 
        });
    };

    return(
        <Theme>
            <C.Container>
                <h1>{state.name}, cadastre o seu endereço</h1>
                <p>Preencha os campos para podermos enviar seus produtos.</p>
                <C.FormCep>
                    <label>
                        <input type="number" placeholder="Digite o seu CEP" onChange={handleCep} />
                    </label>
                </C.FormCep>
                <C.FormContainer>
                    <C.Form1>
                        <label>
                            <input type="text" placeholder="Rua" value={state.rua} onChange={handleRua} />
                        </label>
                        <label>
                            <input type="text" placeholder="Complemento" value={state.complemento} onChange={handleComplemento} />
                        </label>
                        <label>
                            <input type="text" placeholder="Cidade" value={state.cidade} onChange={handleCidade} />
                        </label>
                    </C.Form1>
                    <C.Form2>
                        <label>
                            <input type="number" placeholder="Número da residência" onChange={handleNumero} />
                        </label>
                        <label>
                            <input type="text" placeholder="Bairro" value={state.bairro} onChange={handleBairro} />
                        </label>
                        <label>
                            <input type="text" placeholder="Estado" value={state.estado} onChange={handleEstado} />
                        </label>
                        <C.FormButton>
                            <button onClick={handleStep}>Próximo</button>
                        </C.FormButton>
                    </C.Form2>
                </C.FormContainer>
            </C.Container>
        </Theme>
    );
};