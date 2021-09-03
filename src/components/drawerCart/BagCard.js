import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    height: 140px;
    width: auto;
    background-color: red
`;

const BagCard = ({item}) => {
    return(
        <Grid container spacing={2}>
            {console.log(item[0].details.image)}
            <Grid item xs={4}>
                <StyledImg src={item[0].details.image}/>
            </Grid>
            <Grid item xs={6}>
                <h5>{item[0].name}</h5>
                <p>{`Quantity: ${item.length}`}</p>
            </Grid>
            <Grid item xs={2}>
                <p style={{color: 'orange'}}>{`$ ${(item[0].details.price)*item.length}`}</p>
            </Grid>
        </Grid>
    )
}

export default BagCard;