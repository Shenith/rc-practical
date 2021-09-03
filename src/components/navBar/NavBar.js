import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledDiv = styled.div`
    text-align: center;
    height: 100%
`;

const StyledCartDiv = styled.div`
    text-align: center;
    width: 100px
    background-color: green
`;

const StyledP = styled.p`
    margin-left: 25px;
    margin-top: -20px;
    color: yellow;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

const NavBar = (props) => {

    return(
        <StyledDiv>
            <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            >
                <p>{`${props.count} product(s) found`}</p>
                <StyledCartDiv>
                <ShoppingCartIcon color="inherit" />
                <StyledP>0</StyledP>
                </StyledCartDiv>
            </Grid>
        </StyledDiv>
    )
}

export default NavBar;