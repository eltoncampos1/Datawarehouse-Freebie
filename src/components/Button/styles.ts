import { shade } from 'polished';
import styled from 'styled-components';
import { media } from '../../utils/breakPoints';


export const Container = styled.button`
    width: 210px;
    height: 60px;
    border-radius: 50px;
    padding: 0 16px;
    background: #fff;
    box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
    color: #212353;
    font-weight: 700;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.15, '#fff')}
    }
    
    ${media.mobile} {
        display: none;
    }
`