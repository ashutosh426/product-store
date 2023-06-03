import React, { useState } from "react";

const AddProduct = () => {
    const [productList, setProductList] = useState([]);
    const [newProduct, setNewProduct] = useState({
        product_name:"",
        product_price:"",
        product_desc:"",
        product_category:"",
        product_rating:"",
        product_rating_count:"",
    });

  const saveNewProduct = (event) => {
    event.preventDefault(); //prevent default submitting
    console.log(newProduct);
    //save date in new array
    //create a new array from old array product list
    let _newProductList= [...productList, {...newProduct}];
    setProductList(_newProductList);
    setNewProduct({
        product_name:"",
        product_price:"",
        product_desc:"",
        product_category:"",
        product_rating:"",
        product_rating_count:"",
    })
    alert("Product added Successfully");
  };

  const inputChange = (event) => {
    //console.log("input change Method");
    let value = event.target.value;
    let name = event.target.name;
    // console.log(value, name);
    //create new object from old product
    //update a state of object or array we need to create a new array/object every time
    //because object & array are store my memorry refernce in varible
    let _newProduct ={...newProduct}
        _newProduct[name]=value;
        //update the state
        setNewProduct(_newProduct);
  };

  return (
    <>
      <section className="row">
        <section className=" col-lg-4 col-10 m-auto card p-2 mt-5">
          <p className=" h3 text-center text-danger">Add Product</p>
          <form onSubmit={saveNewProduct}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="product_name"
                value={newProduct.product_name}
                onChange={inputChange}
              />
              <label>Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="product_price"
                value={newProduct.product_price}
                onChange={inputChange}
              />
              <label>Price</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                rows={10}
                className="form-control"
                placeholder="Product Description"
                name="product_desc"
                value={newProduct.product_desc}
                onChange={inputChange}
              />
              <label>Product Description</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                name="product_category"
                value={newProduct.product_category}
                onChange={inputChange}
              >
                <option value="Select">Select</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Books">Books</option>
              </select>
              <label>Product Category</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Name"
                name="product_rating"
                onChange={inputChange}
                value={newProduct.product_rating}
              />
              <label>Product Rating</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Name"
                name="product_rating_count"
                value={newProduct.product_rating_count}
                onChange={inputChange}
              />
              <label>Product Rating Count</label>
            </div>
            <div className=" text-center">
              <button type="submit" className="btn btn-success mx-3">
                Save
              </button>
              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AddProduct;
