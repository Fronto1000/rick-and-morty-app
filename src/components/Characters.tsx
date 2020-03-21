import React from 'react';
import Character from './Character';
import {CharacterModel} from '../models';
import {Box} from '../styles';

interface IProp {
  characters?: CharacterModel[];
}

const Characters = (props: IProp) => {
    
    return (
      <Box>
        {props.characters && props.characters.map((character: CharacterModel) => (
          <Character key={character.id} character={character}/>
        ))}
      </Box>
    );
  }
  export default Characters;
