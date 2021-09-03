import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BagCard from "./BagCard";
import { Grid } from "@material-ui/core";

const StyledDiv = styled.div`
  padding: 10px,
  background-color: black!;
  width: 400px;
  margin: 20px
`;

const StyledP = styled.p`
    color: black;
    text-align: center;
    background-color: yellow;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

const IconContainer = styled.div`
    margin-left: 165px;
    display: flex;
    flex-direction: row;
`;

const DrawerCart = (props) => {
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        const counts = groupBy(props.data.cart, 'id')
        console.log(props.data.cart, 'counts');
        getPrice();
        setCartData(counts);
    },[])

    const getPrice = () => {
        props.data.cart.map((item) => {
            setTotalPrice(totalPrice => totalPrice + (item.details.price))
        })
    }

    const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, {});
      };


    return(
        <StyledDiv>
            <div>
                <IconContainer>
                    <ShoppingCartIcon color="inherit" />
                    <StyledP>{props.data.cart.length}</StyledP>
                    <h2 style={{marginTop: 'auto'}}>Bag</h2>
                </IconContainer>
            </div>
            <div>
            {
                Object.values(cartData).map((i) => {
                    return(
                        <BagCard key={i[0].id} item={i}/>
                    )
                })
            }
            </div>
            <Grid container spacing={2}>
            <Grid item xs={10}>
                <h4>Subtotal</h4>
            </Grid>
            <Grid item xs={2}>
                <h5>{`$ ${totalPrice}`}</h5>
            </Grid>
            </Grid>
            
        </StyledDiv>
    )
}

export default DrawerCart;