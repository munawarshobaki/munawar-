import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, useNavigate, useParams,Link } from 'react-router-dom';


const products = [
    { title: "Potato", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
];

function ProductList() {
  const navigate = useNavigate();

  const choosenproduct = (id) => {
      navigate(`/product/${id}`);
  };

  return (
      <div className="container">
          <div className="table-container">
              <h1>Product List</h1>
              <table>
                  <thead>
                      <tr>
                          <th>Title</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {products.map(product => (
                          <tr key={product.id}>
                              <td>{product.title}</td>
                              <td>
                                  <button onClick={() => choosenproduct(product.id)}>View Details</button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const pro = products.find(p => p.id === parseInt(id));

  if (!pro) {
      return <p>Product not found</p>;
  }

  return (
      <div className="container">
          <div className="product-detail">
              <h2>Product Details</h2>
              <p>Title: {pro.title}</p>
              <p>ID: {pro.id}</p>
              <p>Is Fruit: {pro.isFruit ? "Yes" : "No"}</p>
              <Link to="/">Go to Product List</Link>
          </div>
      </div>
  );
}


const rout= createBrowserRouter([
    {
        path: "/",
        element: <ProductList />,
    },
    {
        path: "/product/:id",
        element: <ProductDetail />,
    },
]);

function App() {
    return (
        <RouterProvider router={rout} />
    );
}


export default App;
