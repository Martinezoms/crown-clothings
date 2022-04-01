import React from "react";
import { CategoryItem, Hero, ServiceOffered } from "../../components";
import "./HomePage.scss";

const HomePage = () => {
  const categories = [
    {
      id: 1,
      title: "Hats"
    },
    {
      id: 2,
      title: "Jackets"
    },
    {
      id: 3,
      title: "Sneakers"
    },
    {
      id: 4,
      title: "Womens"
    },
    {
      id: 5,
      title: "Mens"
    }
  ];

  return (
    <div className="home__container">
      <ServiceOffered />
      <Hero />
      <div className="home__categories">
        {categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
