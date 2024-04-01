import React from "react";
import { Category } from "../../components/category/Category";
import { Footer } from "../../components/footer/Footer";
import { FilteredCards } from "../../components/blog/FilteredCards";
import { useParams } from "react-router-dom";

export const BlogFilteredPage = () => {
    const {category} = useParams();
  return (
    <>
      <Category />
      {category && <FilteredCards category={category} />}
      <Footer />
    </>
  );
};
