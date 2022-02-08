import React from 'react'
import { Button, Table } from 'react-bootstrap';

const ProductList = () => {
    const products = [
        {
          imgSrc:
            "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
          name: "AirPods",
          price: `6,99 $`,
        },
        {
          imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
          name: "Smart watch",
          price: `8,64 $`,
        },
        {
          imgSrc:
            "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
          name: "Iphone 11 ",
          price: `150 $`,
        },
      ];
      const clickMe =(el)=>{
        alert(`the product name is ${el}`)
      }
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
   {products.map((produit)=>
<tr>
<td> <Button variant="success" onClick={()=>clickMe(produit.name)}>Click Me</Button>{' '}</td>
      <td>{produit.name}</td>
      <td><img src={produit.imgSrc} alt="" /></td>
      <td>{produit.price}</td>

</tr> 
   )
   }
  </tbody>
</Table>
        </div>
    )
}

export default ProductList
