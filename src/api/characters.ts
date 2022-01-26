import {iFilter} from '../types/filter';

export const getCharacter = async (filter: iFilter[]) => {
    const url = new URL('https://rickandmortyapi.com/api/character');
    const params = filter.reduce<Record<string, string>>((accum, item) => {
        if(item.value === '') {
            return accum
        }
         return {...accum, [item.title]: item.value}
    },{});
    url.search = new URLSearchParams(params).toString();
    const request = await fetch(url.href);
    const data = await request.json()
    await new Promise(resolve => setTimeout(resolve, 1000))
    return data.results
};