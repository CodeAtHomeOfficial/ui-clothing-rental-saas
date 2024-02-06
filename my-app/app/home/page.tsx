import CategoryFiltersTemplate1 from "@/components/category-filters/template-1";
import CheckoutFormsTemplate1 from "@/components/checkout-forms/template-1";
import FooterTemplate1 from "@/components/footer/template-1";
import HeroSectionTemplate1 from "@/components/hero-sections/template-1";
import ProductListTemplate1 from "@/components/product-lists/template-1";
import ProductListTemplate2 from "@/components/product-lists/template-2";
import ProductListTemplate3 from "@/components/product-lists/template-3";
import ProductListTemplate4 from "@/components/product-lists/template-4";
import ProductOverviewsTemplate1 from "@/components/product-overviews/template-1";
import ReviewsTemplate1 from "@/components/reviews/template-1";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeroSectionTemplate1 />

      <ProductListTemplate1 />
      <ProductListTemplate2 />
      <ProductListTemplate3 />
      <ProductListTemplate4 />

      <CategoryFiltersTemplate1 />
      {/* <CheckoutFormsTemplate1 />
        <ProductOverviewsTemplate1 /> */}

      <ReviewsTemplate1 />

      <FooterTemplate1 />
    </div>
  );
};

export default Page;
