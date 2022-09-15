import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  background-color: #ddeef1;
  

    img{
      margin: 8px;
      width: 100px;
    }

    a{
      text-decoration: none;
    }

    span{
      border: 2px solid #123456;
      border-radius: 4px;
      margin: 12px;
      padding: 8px;
      font-weight: bold;
      text-decoration: none;
      color: #123456;
    }

    span:hover{
      background-color: #123456;
      color: #fff;
      transition: 0.3s;
    }

    .active{
      background-color: #123456;
      color: #fff;
      transition: 0.3s;
    }
`;