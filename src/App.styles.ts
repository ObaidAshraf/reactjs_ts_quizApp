import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/olav.jpg'

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Ariel Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .lifelines {
        margin: 10px;
    }

    .lifelines > button {
        margin-left: 10px;
        border-radius: 10px;
        padding: 0 30px;
        font-size: 20px;
        cursor: pointer;
        border: none;
    }

    .start {
        padding: 5px 100px;
        border-radius: 100px;
        border: none;
        background-color: #4d9efa;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    .start:hover {
        background-color: rgba(3, 76, 158, 0.9);
    }

    .giveup {
        padding: 5px 50px;
        border-radius: 100px;
        border: none;
        background-color: #ff1717;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    .giveup:hover {
        background-color: rgba(255, 56, 56, 0.9);
    }

    .disabled {
        background-color: #7d7d7d
    }

    .btnLifeline {
        background-image: linear-gradient(180deg, #84ff38, #00ff00);
    }

    .btnLifeline:hover {
        background-color: rgba(44, 110, 3, 0.9);
    }

    .question {
        text-align: 'center';
        padding: 10px 100px;
        background-color: #fcfceb;
        border-radius: 10px;
        border: '1px solid #e37d30';
        color: #0214a1;
        font-size: 18px;
    }

    .answer {
        text-align: 'center';
        padding: 10px 20px;
        background-color: #fcfceb;
        border-radius: 100px;
        border: none;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .answer > button {
        background: transparent;
        border: none;
        font-size: 15px;
        cursor: pointer;
    }

    .answer:hover {
        background-color: rgba(250, 238, 182, 0.9)
    }

    .score {
        padding: 5px 50px;
        border-radius: 100px;
        border: none;
        background-color: #000;
        color: #fff;
        font-size: 20px;
        margin-right: 20px
    }

    .score:hover {
        background-color: rgba(64, 64, 64, 0.9)
    }

    .expertAnswer {
        margin-left: 10px;
        border-radius: 10px;
        padding: 0 30px;
        font-size: 20px;
        border: none;        
        background-image: linear-gradient(180deg, #84ff38, #00ff00);
    }

    .next {
        padding: 5px 50px;
        border-radius: 100px;
        border: none;
        background-color: #000;
        color: #fff;
        font-size: 20px;
        margin-right: 20px;
        cursor: pointer;
    }


`;
