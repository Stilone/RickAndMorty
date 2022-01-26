import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {pink} from '@mui/material/colors';
import {Characters, CardCharacter} from './cards.character.styles';
import {iCharacter} from '../../types/character';

interface iCharactersProps {
    value: iCharacter[];
    openModal: (index: number) => void;
};

export const CardsCharacters: React.FC<iCharactersProps> = ({value, openModal}) => {
    return (
        <Characters>
            {value.map((item, index) => {
                return <CardCharacter sx={{maxWidth: 250}} key={item.id}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={item.image}
                        alt={item.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Status: {item.status}
                            {item.status === 'Alive' ? <EmojiPeopleIcon color="success"/>
                                : item.status === 'Dead' ? <EmojiPeopleIcon sx={{color: pink[500]}}/>
                                    : <EmojiPeopleIcon color="disabled"/>}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Location: {item.location?.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => openModal(index)} size="small">More...</Button>
                    </CardActions>
                </CardCharacter>
            })}
        </Characters>
    );
};