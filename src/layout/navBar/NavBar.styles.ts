import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 375px;
    height: 100px;
    padding: 10px 46px 40px 47px;
    position: fixed;
    bottom: 0;
    box-shadow: -2px -1px 4px 0px #00000026;
    background-color: white;
`

export const ItemBox = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    li {
        width: 52px;
        height: 50px;
        display: flex;
        text-align: center;
        cursor: pointer;
        a {
            display: block;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        .active-item {
            color: #3D87FF;
        }

        .inactive-item {
            color: #000000;
        }
    }
`