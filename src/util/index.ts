import {filter, includes} from 'lodash';
import {CharacterModel} from '../models'

export const characterFiltering = (idList: string [], characterList: CharacterModel[]) => {
    return filter(characterList, (character: CharacterModel) => !includes(idList, character.id));
};