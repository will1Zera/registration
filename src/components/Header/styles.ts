import styled from 'styled-components';

export const Container = styled.div`
    margin: 40px 0 15px 0;
    cursor: pointer;
    
    a{
       display: flex;
       text-decoration: none;
       flex-direction: row;
       flex-wrap: nowrap;
    }
`;

export const Info = styled.div`
   
`;

export const Title = styled.div<{ active: boolean; }>`
    font-weight: bold;
    color: ${props => props.active ? '#01F587' : '#B8B8D4'};
`;