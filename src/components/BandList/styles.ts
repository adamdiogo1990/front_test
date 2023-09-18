import styled from 'styled-components';

export const BandListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  padding-top: 100px;
  flex-direction: column;
  
  a{
    text-decoration: none;
  }
`;

export const BandInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 16px;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const BandCard = styled.div`
  margin-bottom: 5px;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  height: 50px; 
  gap: 20px;
  
  -webkit-box-shadow: 0px 0px 26px -11px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 26px -11px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 26px -11px rgba(0,0,0,0.15);

  img {
    width: 100px
    border-radius: 5px;
    border-radius: 50px;
  }

  p {
    font-size: 14px;
  }
`;

export const NotFound = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  flex: 1;
`;