import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormAction } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep1 = () =>{
    
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() =>{
        dispatch({
            type: FormAction.setCurrentStep, //Modifica o step atual
            payload: 1 //Define qual será o step
        });
    }, []);
    
    const handleStep = () =>{ //Faz com que mude para a próxima página
        if(state.name !== "" && state.email !== ""){
            navigate('/step2');
        } else{
            alert("Preencha os dados!");
        }
        
    };

    const handleNome = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setName, //Atualiza o setName
            payload: e.target.value //Pega o valor do input e modifica
        });
    };

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setEmail,
            payload: e.target.value 
        });
    };

    return(
        <Theme>
            <C.Container>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha os campos abaixo com o seu nome completo e email.</p>
                <hr/>
                <label>
                    Nome
                    <input type="text" value={state.name} onChange={handleNome} />
                </label>
                <label>
                    Email
                    <input type="email" value={state.email} onChange={handleEmail} />
                </label>
                <button onClick={handleStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};