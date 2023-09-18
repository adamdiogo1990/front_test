import styled from 'styled-components';

export const AlbumListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;

export const AlbumCard = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  

  img {
    width: 100%;
    border-radius: 5px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }
`;