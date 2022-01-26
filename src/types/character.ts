export interface iCharacter {
    id: number;
    gender: string;
    image: string;
    status: string;
    name: string;
    type?: string
    species?: string;
    created?: string;
    location?: {name: string, url?: string};
    origin?: {name: string, url?: string};
}