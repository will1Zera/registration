import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = { // Definimos o tipo de cada dado
    currentStep: number;
    name: string;
    email: string;
    cep: number;
    rua: string;
    complemento: string;
    cidade: string;
    casa: number,
    bairro: string;
    estado: string;
    nomeCartao: string;
    numeroCartao: number;
    data: number;
    cvv: number;
};

type Action = {
    type: FormAction;
    payload: any;
};

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
};

type FormProviderProps = {
    children: ReactNode
};

const initialData: State = { // Dados iniciais
    currentStep: 0,
    name: '',
    email: '',
    cep: 0,
    rua: '',
    complemento: '',
    cidade: '',
    casa: 0,
    bairro: '',
    estado: '',
    nomeCartao: '',
    numeroCartao: 0,
    data: 0,
    cvv: 0
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormAction{ // Definimos ações para cada campo de input
    setCurrentStep,
    setName,
    setEmail,
    setCep,
    setRua,
    setComplemento,
    setCidade,
    setCasa,
    setBairro,
    setEstado,
    setNomeCartao,
    setNumeroCartao,
    setData,
    setCvv
};

const formReducer = (state: State, action: Action) =>{ // Definimos o tipo de cada ação
    switch(action.type){
        case FormAction.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormAction.setName:
            return {...state, name: action.payload};
        case FormAction.setEmail:
            return {...state, email: action.payload};
        case FormAction.setCep:
            return {...state, cep: action.payload};
        case FormAction.setRua:
            return {...state, rua: action.payload};
        case FormAction.setComplemento:
            return {...state, complemento: action.payload};
        case FormAction.setCidade:
            return {...state, cidade: action.payload};
        case FormAction.setCasa:
            return {...state, casa: action.payload};
        case FormAction.setBairro:
            return {...state, bairro: action.payload};
        case FormAction.setEstado:
            return {...state, estado: action.payload};
        case FormAction.setNomeCartao:
            return {...state, nomeCartao: action.payload};
        case FormAction.setNumeroCartao:
            return {...state, numeroCartao: action.payload};
        case FormAction.setData:
            return {...state, data: action.payload};
        case FormAction.setCvv:
            return {...state, cvv: action.payload};
        default:
            return state;        
    };
};

// Provider
export const FormProvider = ({children}: FormProviderProps) =>{
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );

};

// Context Hook
export const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    };
    return context;
};