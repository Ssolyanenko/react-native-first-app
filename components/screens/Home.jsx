import React from "react";

import {
  SafeAreaView,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Loading } from "../Loading";
import { Post } from "../Cart";

export const Home = ({navigation}) => {
  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchProducts = () => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
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

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />
        }
        data={post}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('FullInfo',{id: item.id , title: item.title})}}>
              <Post
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.image}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
