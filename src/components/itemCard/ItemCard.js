import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../actions";

const StyledButton = styled.button`
    background-color: black;
    font-size: 12px;
    color: white;
    padding: 10px;
    width: 100%;
`;

const StyledDiv = styled.div`
    text-align: center;
    padding: 10px;
    min-height: 400px;

`;

const StyledImg = styled.img`
    width: 100%
`;

const Tag = styled.div`
    width: 60%;
    background-color: black;
    margin-left: auto;
    font-size: 12px;
    color: white
`;

function ItemCard (props) {

  const dispatch = useDispatch()

  const onClickHandler = (item) => {
    console.log(item)
    // dispatch(addToCart(item))
  }

  const { item } = props
    return(
      <Grid item xs={3} >
        <StyledDiv>
            { item.details.tag === "Free Shipping" ? <Tag>Free shipping</Tag> : null }
            <StyledImg src={item.details.image}/>
            <p>{item.name}</p>
            <h3>{`$ ${item.details.price}`}</h3>
            <StyledButton onClick={() => onClickHandler(item)} >Add to cart</StyledButton>
        </StyledDiv>
      </Grid>
    )
}

export default ItemCard;