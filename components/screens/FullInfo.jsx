import React from "react"
import styled from "styled-components/native"
import { SafeAreaView,ActivityIndicator,Text } from "react-native"
import { Loading } from "../Loading"

const PostImage = styled.Image`
border-radius:10px;
width:100%;
height:250px;
margin-bottom:20px;
`
const PostText = styled.Text `
font-size: 18px;
line-height:24px;

`

export const FullInfo = ({navigation, route})=>{
    const [post, setPost] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const {id,title} = route.params
    console.log(route)
    const fetchProducts = () => {
      navigation.setOptions({
        title
      })
        setIsLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((json) => setPost(json))
          .catch((error) => {
            console.log(error);
            Alert.alert("error", "Somethig went wrong");
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
      React.useEffect(fetchProducts, []);
      if (isLoading) {
        return (
          <Loading/>
        );
      }
    return(
        <SafeAreaView>
        <PostImage source={{uri: post.image}}/>
       <PostText>{post.description}</PostText>
        </SafeAreaView>
    )

}