import React from 'react';
import {IContext} from '../models';

export const Context = React.createContext<IContext>({
    handleRemovecCharacter: () => {},
    handleCharacterSelection: () => {}
});