import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
};

export const Theme = ({ children }: Props) =>{
    const { state } = useForm();

    return(
        <C.Container>
            <C.Area>
                <C.Bar>
                    <Header
                        title = 'Cadastro'
                        path = '/'
                        active = {state.currentStep === 1}
                    />
                    <Header
                        title = 'Endereço'
                        path = '/step2'
                        active = {state.currentStep === 2}
                    />
                    <Header
                        title = 'Pagamento'
                        path = '/step3'
                        active = {state.currentStep === 3}
                    />
                </C.Bar>
                <C.Page>
                    {children}
                </C.Page>
            </C.Area>
        </C.Container>
    );
};