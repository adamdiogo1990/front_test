import styled from 'styled-components';

export const BandListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  padding-top: 100px;
  flex-direction: column;
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
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 50px; 
  gap: 20px;
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