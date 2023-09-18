import TrackList from "../TrackList";
import { AlbumCard, AlbumListContainer } from "./styles";

interface AlbumListProps {
    albums: string[];
}

export const AlbumList: React.FC<AlbumListProps> = ({ albums }) => {
    return (
        <AlbumListContainer>
            <h2>Albuns</h2>
            {albums &&
            albums.map((album: string) => (
                <AlbumCard key={album}>
                    <TrackList id={album}></TrackList>
                </AlbumCard>
            ))}
        </AlbumListContainer>
    )
}