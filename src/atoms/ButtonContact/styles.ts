import styled from 'styled-components';

export const Container = styled.button`
    width: 200px;
    height: 60px;
    border: 1px solid #17a4d0;
    background-color: #17a4d0;
    color: #fff;
    font-size: 14px;
    font-wight: 400px;
    margin-top: 50px;
    border-radius: 100px;
    box-shadow: 0px 0px 17px -8px transparent;
    transition: all 0.25s ease-out;
    &:hover {
        color: #17a4d0;
        background-color: #F8FDFF;
        box-shadow: 0px 0px 17px -5px #17a4d0;
    }
`;