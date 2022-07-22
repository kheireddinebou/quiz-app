import styled, { StyledComponent } from "styled-components";

export const CardWrapper = styled.div`
  background-color: #effeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5pc 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #000;
  max-width: 90vw;
  width: 500px;
  min-height: 200px;

  .paragraph {
    font-size: 1.2rem;
    color: #000;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease-in-out;
  margin-top: 10px;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
  }
`;
