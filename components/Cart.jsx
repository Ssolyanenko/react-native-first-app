
import styled from "styled-components/native";

const CartView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const CartImage = styled.Image`
  z-index:2;
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-right:15px
`;

const CartDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const CartTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const CartData = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const cutStr = (str)=>{
  if(str.length>=50){
    return str.substring(0,50) + '...'
  }

  return str
}

export const Post = ({title,imageUrl,price})=>{
    return(
        <CartView>
        <CartImage
          source={{
            uri: imageUrl,
          }}
        />
        <CartDetails>
          <CartTitle>{cutStr(title)}</CartTitle>
          <CartData>{`${price} $`}</CartData>
        </CartDetails>
      </CartView>
    )
}