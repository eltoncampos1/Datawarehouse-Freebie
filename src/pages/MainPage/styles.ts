import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;

`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1120px;
    height: 60px;
    position: absolute;
    width: 1120px;
    height: 60px;
    left: 240px;
    top: 50px;
`

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`

export const Logo = styled.img`
    display: flex;

    position: absolute;
    width: 49px;
    height: 35px;
    left: 240px;
    margin-top: 10px;
    margin-left: -50px;
`


export const NavTop = styled.nav`
    display: flex;
    width: 322px;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
`

export const ListItem = styled.li`
    display: flex;

    margin-right: 40px;
    width: 53px;
    height: 30px;
    list-style: none;
    line-height: 160%;
    color: #212353;
`

export const HeaderButton = styled.button`
    width: 210px;
    height: 60px;
    border-radius: 50px;
    background: #fff;
    box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
    color: #212353;
    font-weight: 700;
    font-size: 16px;
`
