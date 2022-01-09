import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  right: 25px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
