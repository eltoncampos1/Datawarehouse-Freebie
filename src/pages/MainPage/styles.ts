import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { media } from '../../utils/breakPoints';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    width: 100vw;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75vw;
    height: 60px;
    margin-left: 220px;
    margin-top: 50px; 
    margin-right: 230px;

    ${media.mobile} {
        display: flex;
        width: 760px;
        margin: 0 2%;
        background-color: #e5e5e5;
    }

`

export const NavWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    
    ${media.mobile} {
        align-self: flex-end;
        justify-content: space-between;
        margin-left: 60px;
    }
`

export const Logo = styled.img`
    width: 49px;
    height: 35px;
    margin-top: 20px;
    margin-left: -50px;

    ${media.mobile} {
        margin-bottom: 10px;
    }
`


export const NavTop = styled.nav`
    margin-left: -100px;
    display: flex;
    width: 20vw;
    padding: 0.5rem;
    height: 60px;

      ${media.mobile} {
        display: none;
    }
`

export const List = styled.ul`
    display: flex;
    width: 53px;
    height: 30px;
    margin-left: -30px;
`

export const ListItem = styled.li`
    margin-right: 40px;
    width: 53px;
    height: 30px;
    list-style: none;
    line-height: 160%;
    color: #212353;
`

export const MenuMobile = styled(FaBars)`
    display: none;
    color: #9C69E2;

    ${media.mobile} {
        display: block;
        position:absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
