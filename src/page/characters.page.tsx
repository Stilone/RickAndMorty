import React from 'react';
import {Container} from './character.page.styles';
import {CharactersComponent} from '../components/characters/characters.component';

export const CharactersPage = () => {
    return (
        <Container>
            <CharactersComponent/>
        </Container>
    );
};