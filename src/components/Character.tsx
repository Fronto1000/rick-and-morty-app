import React, {useContext} from 'react';
import {CharacterModel} from '../models';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Context} from '../context';
import get from 'lodash/get';
import {CharacterItem} from '../styles';

interface IProp {
    character?: CharacterModel;
}

const Character = (props: IProp) => {

    const {handleRemovecCharacter, handleCharacterSelection} = useContext(Context);

    return(
        <CharacterItem>
            <IconButton onClick={() => handleRemovecCharacter(get(props, 'character.id', ''))}>
                <CloseIcon />
            </IconButton>
            <ButtonBase onClick={() => handleCharacterSelection(get(props, 'character', {}))}> 
                <img src={get(props, 'character.image', '')} alt={get(props, 'character.name', '')} />
            </ButtonBase>
        </CharacterItem>
    );
}
  
export default Character;
