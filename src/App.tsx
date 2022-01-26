import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Global, Container} from './App.styles';
import {CharactersPage} from './page/characters.page';

const queryClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Global/>
            <Container/>
            <CharactersPage/>
        </QueryClientProvider>
    );
};
