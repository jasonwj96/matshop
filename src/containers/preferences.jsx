import React, { useEffect, useState } from 'react';
import './preferences.scss';
import ProductMaintenanceItem from '../components/productMaintenanceItem';
import Configuration from "../config";

const Preferences = () => {
  const [items, setItems] = useState([]);
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newImageName, setNewImageName] = useState("");
  const [newCategory, setNewCategory] = useState("");


  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(`${Configuration.apiPath}/getProducts.php`, options)
      .then(
        (response) => {
          return response.clone().text();
        }
      )
      .then(
        (json) => {
          console.table(JSON.parse(json));
          setItems(JSON.parse(json));
        }
      )
      .catch(
        (err) => console.log(err)
      )
  }, [])

  const addItem = () => {
    if (
      newId !== "" &&
      newTitle !== "" &&
      newDesc !== "" &&
      newPrice !== 0 &&
      newRating !== 0 &&
      newImageName !== "",
      newCategory !== ""
    ) {
      const newProduct = {
        newId,
        newTitle,
        newDesc,
        newPrice,
        newRating,
        newImageName,
        newCategory
      }

      if (window.confirm("Do you want to add this product to the database?")) {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newProduct)
        };

        fetch(`${Configuration.apiPath}/addProduct.php`, options)
          .then(
            (response) => {
              if (response.ok) {
                alert("Product added successfully");
                setNewId("");
                setNewTitle("")
                setNewDesc("");
                setNewPrice("");
                setNewRating("");
                setNewImageName("");
                setNewCategory("");
              }
              else
                alert("Product couldn't be added");
            }
          )
          .catch(
            (err) => console.log(err)
          );
      }
    } else {
      alert("Error debe llenar todos los campos");
    }
  }

  return (
    <div id="preferences-container">
      <div className="productlist-container">
        <div className="productlist">
          <div className="header">
            <p>Product list</p>
          </div>
          <div>
            {items.length > 0 ? (
              items.map((item, index) => {
                return <ProductMaintenanceItem key={index} item={item} />;
              })
            ) : (
                <p id="empty-msg">There are no products in the database</p>
              )}
          </div>
          <div id="editPanel">
            <form>
              <div>
                <p id="editpanel-title">Add product</p>
                <input value={newId} onChange={(event) => { setNewId(event.target.value) }} className="input" type="text" placeholder="ID" />
                <input value={newTitle} onChange={(event) => { setNewTitle(event.target.value) }} className="input" type="text" placeholder="Title" />
                <input value={newDesc} onChange={(event) => { setNewDesc(event.target.value) }} className="input" type="text" placeholder="Description" />
                <input value={newPrice} onChange={(event) => { setNewPrice(event.target.value) }} className="input" type="text" placeholder="Price" min="1" max="100" />
                <input value={newRating} onChange={(event) => { setNewRating(event.target.value) }} className="input" type="number" placeholder="Rating" />
                <input value={newImageName} onChange={(event) => { setNewImageName(event.target.value) }} className="input" type="text" placeholder="Image name (with extension)" />
                <input value={newCategory} onChange={(event) => { setNewCategory(event.target.value) }} className="input" type="text" placeholder="Category" />
              </div>
            </form>
          </div>
          <div className="footer">
            <button onClick={addItem}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preferences
