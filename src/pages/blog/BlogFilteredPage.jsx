import React from "react";
import { Category } from "../../components/category/Category";
import { Footer } from "../../components/footer/Footer";
import { FilteredCards } from "../../components/blog/FilteredCards";
import { useParams } from "react-router-dom";

export const BlogFilteredPage = () => {
  const { category } = useParams();
  return (
    <>
      <Category />
      {/* <div className="buttons">
        <div className="left">
          <button className="button">
            <IoArrowBackCircleSharp size={30} />
          </button>
        </div>
      </div> */}
      {category && <FilteredCards category={category} />}
      <Footer />
    </>
  );
};
