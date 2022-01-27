import React, {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import {SelectChangeEvent} from '@mui/material';
import {Content, RequestFailed} from './characters.styles';
import {getCharacter} from '../../api/characters';
import {iCharacter} from '../../types/character';
import {Loading} from '../loading/loading.component';
import {CharacterCards} from '../cards.characters/character.cards.component';
import {Filters} from '../filter/filter.component';
import {iFilter} from '../../types/filter';
import {ModalComponent} from '../modal/modal.component';

export const CharactersComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState<iCharacter[]>([]);
    const [character, setCharacter] = useState<iCharacter | undefined>();
    const [filter, setFilter] = useState<iFilter[]>([
        {title: 'name', value: ''},
        {title: 'status', value: '', options: ['Alive', 'Dead', 'unknown']},
        {title: 'species', value: '', options: ['Alien', 'Human']},
        {
            title: 'type',
            value: '',
            options: ['', 'Genetic experiment', 'Superhuman (Ghost trains summoner)', 'Parasite', 'Human with antennae', 'Human with ants in his eyes']
        },
        {title: 'gender', value: '', options: ['Female', 'Male', 'Genderless', 'unknown']},
    ]);

    const {
        isLoading,
        data,
        isSuccess,
        isError,
        error
    } = useQuery<iCharacter[], { message: string }>(['character', filter], async () => {
        const data = await getCharacter(filter);
        if (data === undefined) {
            throw new Error('Поиск не деал результата')
        }
        return data;
    }, {
        retry: false
    });

    useEffect(() => {
        if (isSuccess && Array.isArray(data)) {
            setValue(data);
        }
    }, [data, isSuccess]);

    const handleFilter = (field: string, event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>) => {
        const newFilter = [...filter];
        const index = filter.findIndex(item => {
            return item.title === field
        });
        newFilter[index].value = event.target.value;
        setFilter(newFilter);
    };

    const resetFilter = () => {
        const newFilter = [...filter]
        newFilter.map(item => {
            return item.value = ''
        })
        setFilter(newFilter);
    };

    const openModal = (index: number) => {
        setCharacter(value[index]);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <Content>
            <Filters filter={filter} handleFilter={handleFilter} resetFilter={resetFilter}/>
            {
                isLoading ? <Loading/>
                    : isError ? <RequestFailed>Ошибка: {error && error.message}</RequestFailed>
                    : <div>
                            {character && <ModalComponent value={character} open={open} handleClose={handleClose}/>}
                            <CharacterCards value={value} openModal={openModal}/>
                    </div>
            }
        </Content>
    );
};