import React from 'react';
import products from '../../data/products';
import './ProductsTable.css';


export default props => {

    function getProducts() {
        return products.map((product, i) => {
            return (
                <tr key={product.id} 
                    className={product.id % 2 === 0 ? "Par" : ""}>
                    <td>{product.id}</td>
                    <td>{product.car}</td>
                    <td>R${product.price.toFixed(2).replace('.',',')}</td>
                </tr>
            );
        })
    }

    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Car</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getProducts()}
                </tbody>
            </table>    
        </div>
    );
}