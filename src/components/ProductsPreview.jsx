import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Items = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setCategories(response.data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-white">
            <div className="menu-wrapper">
              <br></br>
            <h1 className="font-bold text-center text-3xl">Food Categories</h1>
            <br></br>
                <div className="categories-list">
                    {categories.map(category => (
                        <Link
                            key={category.idCategory}
                            to={`/menu/${category.strCategory}`}
                            className="category-item-link"
                        >
                            <div className="category-item">
                                <img src={category.strCategoryThumb} alt={category.strCategory} />
                                <h3>{category.strCategory}</h3>
                            </div>
                        </Link>
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

                .category-item-link {
                    text-decoration: none;
                    color: inherit;
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
}

export default Items;
