import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumList } from '../../components/AlbumList';
import { Band } from '../../core/interfaces/Band';
import { Biography, DetailContainer, HeaderImage } from './styles';

const BandDetail: React.FC = () => {
    const apiKey = process.env.REACT_APP_BASE_URL;
    const params = useParams();
    const id = params.id as string;
    const [bandData, setBandData] = useState<Band | undefined>(undefined);


    useEffect(() => {
        axios.get(`${apiKey}/bands/${id}`).then((response) => {
            setBandData(response.data);
        });
    }, []);

    const createMarkup = (value: string) => {
        return {__html: value};
      }

    if (bandData === undefined) {
        return <div>Carregando...</div>;
    }
    

    return (
        <DetailContainer>
            <HeaderImage image={bandData.image}>
                <h2>{bandData.name}</h2>
                <img src={bandData.image} alt={bandData.name} />
            </HeaderImage>
            <Biography dangerouslySetInnerHTML={createMarkup(bandData.biography)}></Biography>
            <AlbumList albums={bandData.albums}></AlbumList>
        </DetailContainer>
    );
};

export default BandDetail;
