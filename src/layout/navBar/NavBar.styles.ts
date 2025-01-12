import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 23.4375rem;
    height: 6.25rem;
    padding: 0.625rem 2.875rem 2.5rem 2.9375rem;
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
    font-size: 0.875rem;
    line-height: 1.25rem;
    li {
        width: 3.25rem;
        height: 3.125rem;
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