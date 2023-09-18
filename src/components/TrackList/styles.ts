import styled from 'styled-components';

export const BandListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TitleAlbum = styled.div`
  font-weight: bold;
  font-size: 16px;
  width: 100%;
`;

export const TrackInfo = styled.div`
  font-weight: 100;
  font-size: 13px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgb(255,255,255);
  width: 100%;
  flex: 1;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%);
`;