import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    margin-top: -10px;
    margin-left: 5px;
`;

const IconContainer = styled.div`
    margin-left: 185px;
`;

const DrawerCart = (props) => {
    const [cartData, setCartData] = useState([])

    useEffect(()=>{
        const counts = groupBy(props.data.cart, 'id')
        console.log(counts, 'counts');
        setCartData(counts);
    },[])

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
            <IconContainer>
            <ShoppingCartIcon color="inherit" />
            <StyledP>{props.data.cart.length}</StyledP>
            </IconContainer>

            <div>
            {
                Object.values(cartData).map((i) => {
                    console.log(i[0], 'objjj')
                    return(
                        <div>
                            <p>{i.length}</p>
                            <p>{i[0].name}</p>
                        </div>
                    )
                })
            }
            </div>
            
        </StyledDiv>
    )
}

export default DrawerCart;