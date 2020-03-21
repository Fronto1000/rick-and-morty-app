export interface CharacterModel {
    id?: string;
    name?: string;
    image?: string;
    status?: string;
  }
  
  export interface CharacterData {
    results?: CharacterModel[];
  }
  
  export interface DataQ {
    characters?: CharacterData;
  }
  
  export interface DataV {
    searchQuery?: string;
  }

  export interface IContext {
    handleRemovecCharacter: (id: string) => void;
    handleCharacterSelection: (character: CharacterModel) => void;
  }