import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/authContext";

const MenuItems = ({ apiUrl }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCategories(response.data.meals);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, [apiUrl]);


  const { cartItems, addToCart, removeFromCart, userLoggedIn } = useAuth();

  const handleAddToCart = (meal) => {
    if(!userLoggedIn){
        alert("Login to add to cart!")
    }else{
        addToCart(meal); // Call the addToCart function from the auth context
        console.log(`Added ${meal.strMeal} to cart`);
    }
  };

  return (
    <div className="bg-white">
      <div className="menu-wrapper">
        <br></br>
        <h1 className="font-bold text-center text-3xl">Meals</h1>
        <br></br>
        <div className="categories-list">
          {categories.map((meal) => (
            <div key={meal.idMeal} className="category-item">
              <img src={meal.strMealThumb} alt={meal.strCategory} />
              <h3>{meal.strMeal}</h3>
              <br></br>
              <button onClick={() => handleAddToCart(meal)} className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <br></br>
      </div>

      <style jsx>{`
        .categories-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 20px;
        }

        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          transition: transform 0.3s ease-in-out;
        }

        .category-item:hover {
          transform: translateY(-5px);
        }

        .category-item img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .category-item h3 {
          font-size: 18px;
          font-weight: 500;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default MenuItems;
