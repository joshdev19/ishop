import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductsType } from "../types/types";
import axios from "axios";
import Navbar from "../components/Navbar";

const ProductDetails = () => {

    const { id } = useParams();

    const [ data, setData ] = useState<ProductsType>();

    const addToCart = async () => {

        try {
            
            const request = await axios.post('/carts', data);

            const response = await request.data;
            
            console.log(response)

        } catch (error) {
        
            console.log(error)

        }

    }

    console.log(data)

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then( res => setData( res.data ) )
        .catch( err => console.log(err))

    }, [ setData ])

    return (
        
        <div className="wrapper products-detail-wrapper">

            <Navbar/>

            <div className="product-detail-container">

                <div className="image-wrapper">
                    <img src={data?.image} alt="" />
                </div>

                <div className="content-wrapper">

                    <div className="title-wrapper">
                        { data?.title }
                    </div>
                    
                    <div className="description"> 
                        { data?.description }
                    </div>


                    <div className="price">
                        { `$${ data?.price }` }
                    </div>

                    <div className="buttons-wrapper">
                        <button type="button" onClick={ addToCart }> Add To Cart </button>
                        <button type="button"> Buy Now </button>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default ProductDetails