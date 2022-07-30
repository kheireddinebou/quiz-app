
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *{
    padding: 0;
     margin: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
   }

   body{
    background-image: url(https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
    background-size: cover;
    display: flex;
    justify-content: center;
    padding: 20px 0;
   }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  p {
    color: #fff;
  }

  .score {
    font-size: 2rem;
    margin: 0;
  }

  .next,
  .start {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38858;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0px 40px;
  }

  .start{
   max-width: 200px;
  }
`;
