import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import Characters from '../components/Characters';
import {DataQ, DataV, CharacterModel} from '../models';
import {Context} from '../context';
import {characterFiltering} from '../util';
import Party from '../components/Party';
import {get, includes} from 'lodash';
import {GlobalStyle, PageWrapper, StyledInput} from '../styles';
import {GET_CHARACTERS} from '../service';

function MainPage() {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [deletedCharacterList, setDeletedCharacterList] = useState<string[]>([]);
  const [mortyPicture, setMortyPicture] = useState<string>('');
  const [rickPicture, setRickPicture] = useState<string>('');

  const {loading, data} = useQuery<DataQ, DataV> (
    GET_CHARACTERS, {
      variables: {searchQuery},
      skip: searchQuery.length <= 2,
    },
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRemovecCharacter = (id: string) => {
    setDeletedCharacterList([...deletedCharacterList, id]);
  }

  const handleCharacterSelection = (character: CharacterModel) => {
    if(includes(get(character, 'name', '').toLowerCase(), 'morty')) {
      setMortyPicture(get(character, 'image', ''));
    } else if(includes(get(character, 'name', '').toLowerCase(), 'rick')) {
      setRickPicture(get(character, 'image', ''));
    }
  }

  return (
    <React.Fragment>
      <GlobalStyle/>
      <PageWrapper>
        <StyledInput type="text" onChange={onChangeInput} value={searchQuery}/>
        <Context.Provider value={{handleRemovecCharacter, handleCharacterSelection}}>
          {!loading &&
           data !== undefined &&
            data.characters !== undefined &&
             data.characters.results && 
             <Characters characters={characterFiltering(deletedCharacterList, data.characters.results)}/>}
        </Context.Provider>
        <Party mortyImg={mortyPicture} rickImg={rickPicture}/>
      </PageWrapper>
    </React.Fragment>
  );
}

export default MainPage;
