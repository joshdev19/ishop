import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../types/types";
import ProductItems from "../components/ProductItems";
import Navbar from "../components/Navbar";

const Products = () => {

    const [ data, setData ] = useState<ProductsType[]>();

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
        .then( res => setData( res.data ) )
        .catch( err => console.log(err))

    }, [ setData ])

    return (
        <div className="wrapper products-wrapper">

            <Navbar/>
            
            {
                data && data?.map( p => {

                    return <ProductItems key={ p?.id } { ...p } />

                })
            }

        </div>
    )

}

export default Products;