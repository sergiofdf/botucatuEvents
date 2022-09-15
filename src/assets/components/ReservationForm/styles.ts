import styled from "styled-components";

export const Container = styled.div`
width: 60%;
margin: auto;
`;

export const Form = styled.form``;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button{
    margin: 0px 20px;
    width: 300px;
    height: 50px;
    background-color: #808080;
    color: #fff;
    font-size: 18px;
    border: 2px solid #123456;
    border-radius: 4px;
  }
`;

export const Input = styled.input`
  margin: 8px 20px; 
  width: 100%;
  background: #fff;
  border: 2px solid #123456;
  outline: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border: 2px solid #654321;
  }
`;
