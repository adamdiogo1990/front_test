import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Band } from '../../core/interfaces/Band';
import { BandCard, BandInfo, BandListContainer, NotFound } from './styles';
import { Link } from 'react-router-dom';

interface BandListProps {
    bands: Band[];
}
  
const BandList: React.FC<BandListProps> = ({ bands }) => {
    return (
        <BandListContainer>
            {bands.map((band) => (
                <Link to={`/band/${band.id}`} key={band.id}>
                    <BandCard>
                        <img src={band.image} alt={band.name} />
                        <BandInfo>
                            <h2>{band.name}</h2>
                            <p>Num Plays: {band.numPlays}</p>
                        </BandInfo>              
                    </BandCard>
                </Link>
            ))}
            {
                bands.length === 0 && (
                    <NotFound>Nenhum registro encontrado</NotFound>
                )
            }
        </BandListContainer>
    );
};

export default BandList;
