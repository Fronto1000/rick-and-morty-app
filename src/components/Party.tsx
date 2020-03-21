import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {Box, Card, PartyTitle, PartyItem} from '../styles'

interface IProps {
    mortyImg: string;
    rickImg: string;
}

interface IConfig {
    name: string;
    img: string;
}

const Party = (props: IProps) => {

    const {rickImg, mortyImg} = props;
    const configParty: IConfig[] = [
        {
            name: 'rick',
            img: rickImg,
        },
        {
            name: 'morty',
            img: mortyImg,
        }
    ];
    
    return (
        <div>
            <PartyTitle>Party</PartyTitle>
            <Box>
                {configParty.map((item: IConfig) => (
                    <PartyItem key={item.name}>
                        {isEmpty(item.img) ? (
                            <Card>
                                <span>{item.name}</span>
                            </Card>
                        ):(
                            <img src={item.img} alt={item.name}/> 
                        )}
                    </PartyItem>
                ))}
            </Box>
        </div>
    
    );
  }
  export default Party;
