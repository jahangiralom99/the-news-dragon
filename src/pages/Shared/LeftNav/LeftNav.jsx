/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(categories);

  return (
    <div>
          <h4>All Category</h4>
          <div className="ps-5">
          {
              categories.map(categorie => <p
              key={categorie.id}
              ><Link className="text-black text-decoration-none">{categorie.name}</Link></p>)
          }
         </div>
    </div>
  );
};

export default LeftNav;
