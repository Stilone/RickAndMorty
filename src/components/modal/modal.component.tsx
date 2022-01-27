import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import {pink} from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {style} from './modal.styles';
import {iCharacter} from '../../types/character';

interface iModalProps {
    value: iCharacter;
    open: boolean;
    handleClose: () => void;
}

export const ModalComponent: React.FC<iModalProps> = ({value, handleClose, open}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <CardMedia
                    component="img"
                    height="340"
                    image={value.image}
                    alt={value.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {value.name}
                    </Typography>
                    <Typography variant="button" color="text.secondary">
                        Type: {value.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {value.status}
                        {value.status === 'Alive' ? <EmojiPeopleIcon color="success"/>
                            : value.status === 'Dead' ? <EmojiPeopleIcon sx={{color: pink[500]}}/>
                                : <EmojiPeopleIcon color="disabled"/>}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Gender: {value.gender}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Race: {value.species}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Origin: {value.origin?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Location: {value.location?.name}
                    </Typography>
                </CardContent>
            </Box>
        </Modal>
    );
};
