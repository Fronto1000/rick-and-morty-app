import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
 }
`;

export const PageWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;

export const StyledInput = styled.input`
    height: 20px;
    width: 93%;
    font-size: 20px;
    text-transform: uppercase;
    padding: 30px;
    margin: 50px 0 20px 0;
    display: inline-block;
    box-sizing: border-box;
`;

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 50px;
`;

export const PartyItem = styled.div`
    width: 22%;
    margin: 8px;
    height: 209px;
    img {
        width: 100%;
        height: 100%;  
        position: relative; left: 50%;
        transform: translateX(-50%);
    }
`;

export const Card = styled.div`
    background: silver;
    height: 100%;
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    position: relative;
    span {
        position: absolute;
        top: 75%;
        left: 0;
        right: 0;
    }
`;

export const PartyTitle = styled.h1`
    text-transform: uppercase;
`;

export const CharacterItem = styled.div`
    width: 22%;
    box-sizing: border-box;
    margin: 8px;
    position: relative;
    img {
        width: 100%;
    }
    .MuiIconButton-root {
        position: absolute;
        right: 10px;
        top: 10px;
        background: white;
        padding: 2px;
        z-index: 1;
    }
    .MuiIconButton-root:hover {
        background: white;
    }
`;