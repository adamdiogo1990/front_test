import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BandListContainer, TitleAlbum, TrackInfo } from './styles';
import { Album } from '../../core/interfaces/Album';
import { Track } from '../../core/interfaces/Track';

interface TrackListProps {
    id: string;
}
  
const BandList: React.FC<TrackListProps> = ({ id }) => {
    const apiKey = process.env.REACT_APP_BASE_URL;
    const [albumData, setAlbumData] = useState<Album>();
    const [tracks, setTracks] = useState<Track[]>();

    useEffect(() => {
        axios.get(`${apiKey}/albums/${id}`).then((response) => {
            setAlbumData(response.data);
            setTracks(response.data.tracks)
        });
    }, []);

    return (
        <BandListContainer>
            <TitleAlbum>
                {albumData?.name}
                { tracks && tracks.map((track: Track) => (
                    <TrackInfo key={track.id}> {track.name}</TrackInfo>
                ))}
            </TitleAlbum>
        </BandListContainer>
    );
};

export default BandList;
