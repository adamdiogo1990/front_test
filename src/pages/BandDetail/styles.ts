import styled from 'styled-components';

interface HeaderImageProps {
  image: string;
}


export const DetailContainer = styled.div`
  width: 100%;
`;

export const HeaderImage = styled.div<HeaderImageProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #000
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    bottom: -20px;
    position: absolute;
    -webkit-box-shadow: 0px -1px 9px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px -1px 9px 0px rgba(0,0,0,0.33);
    box-shadow: 0px -1px 9px 0px rgba(0,0,0,0.33);
  }
`;

export const Biography = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
`;