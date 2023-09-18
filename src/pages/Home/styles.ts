import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxSearch = styled.div`
  display: flex;
  flex:1;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  background: rgb(231,154,128);
  background: linear-gradient(180deg, rgba(231,154,128,1) 0%, rgba(255,170,141,1) 100%);

  input[type='text'] {
    width: 70%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    background-color: #F5B9A4;
    font-size:12px;
    box-sizing: border-box;
  }


  select {
    width: 25%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    background-color: #F5B9A4;
    font-size:11px;
    padding-right: 10px;
  }
`;