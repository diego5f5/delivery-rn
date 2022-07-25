import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../store/features/basketSlice";

const DishRow = ({ id, name, short_description, price, image }) => {
  const [isPressed, setisPressed] = useState(false);

  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        short_description,
        price,
        image,
      })
    );
  };

  const removeItemFromBasket = () => {
    if (items?.length <= 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: image,
              }}
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4 rounded"
            />
          </View>
        </View>
      </TouchableOpacity>

      {!isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon
                color={items.length ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
