import * as C from './styles';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    path: string;
    active: boolean;
};

export const Header = ({ title, path, active}: Props) =>{
    return(
        <C.Container>
            <Link to = {path}>
                <C.Info>
                    <C.Title active={active }>{title}</C.Title>
                </C.Info>
            </Link>
        </C.Container>
    );
};