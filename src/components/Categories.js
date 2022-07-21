import { ScrollView } from "react-native";
import React from "react";

import CategoryCard from "./CategoryCard";

import { CATEGORIES_MOCK } from "../../mock-data";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator
    >
      {CATEGORIES_MOCK.map(({ id, imgUrl, title }) => (
        <CategoryCard key={id} imgUrl={imgUrl} title={title} />
      ))}
    </ScrollView>
  );
};

export default Categories;
