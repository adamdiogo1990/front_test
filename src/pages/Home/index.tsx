
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BandList from '../../components/BandList';
import { Band } from '../../core/interfaces/Band';
import { BoxSearch, Header, HomeContainer } from './styles';

const Home: React.FC = () => {
    const apiKey = process.env.REACT_APP_BASE_URL;

    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState<'popularidade' | 'alfabetica'>('popularidade');

    const [bands, setBands] = useState<Band[]>([]);

    useEffect(() => {
        axios.get(`${apiKey}/bands`).then((response) => {
        setBands(response.data);
        });
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
      
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value as 'popularidade' | 'alfabetica');
    };
      
    const filteredBands = bands.filter((band) =>
        band.name.toLowerCase().includes(searchText.toLowerCase())
    );
      
    const sortedBands = [...filteredBands].sort((a, b) => {
        if (sortBy === 'popularidade') {
          return b.numPlays - a.numPlays;
        } else {
          return a.name.localeCompare(b.name);
        }
    });
      
    
    return (
        <HomeContainer>
            <Header>
                <BoxSearch>
                    
                    <input
                        type="text"
                        placeholder="Pesquisar banda"
                        value={searchText}
                        onChange={handleSearch}
                    />
                </BoxSearch>
                
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="popularidade">Popularidade</option>
                    <option value="alfabetica">Ordem Alfabética</option>
                </select>
            </Header>
            <BandList bands={sortedBands} />
        </HomeContainer>
    );
};

export default Home;
