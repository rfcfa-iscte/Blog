import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";
import { Footer } from "../../components/footer/Footer";

export const Blog = () => {
  return (
    <>
      <Category />
      <Card />
      <Footer />
    </>
  );
};
