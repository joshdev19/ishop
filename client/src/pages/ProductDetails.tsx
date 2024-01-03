import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductsType } from "../types/types";
import axios, { AxiosHeaderValue } from "axios";
import Navbar from "../components/Navbar";

const ProductDetails = () => {

    const { id } = useParams();

    const [ data, setData ] = useState<ProductsType>();

    const testValues: string | object = {
        user_id: '2b4e8983-7fa1-4a29-b6f3-4ee051dc61f0',
        username: 'jinshin.19'
    }

    const headers : AxiosHeaderValue | object = {
        "Custom-Header": JSON.stringify(testValues)
    }

    const addToCart = async () => {

        try {
            
            const request = await axios.post('/carts', data, { headers });

            const response = await request.data;
            console.log(data)
            
            console.log(response)

        } catch (error) {
        
            console.log(error)

        }

    }

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