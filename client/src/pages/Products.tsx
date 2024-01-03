import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../types/types";
import ProductItems from "../components/ProductItems";
import Navbar from "../components/Navbar";
import { getCarts } from "../utils/function";

const Products = () => {

    const [ data, setData ] = useState<ProductsType[]>();
    const [ carts, setCarts ] = useState<[]>();

    const testValues = {
        user_id: '2b4e8983-7fa1-4a29-b6f3-4ee051dc61f0',
        username: 'jinshin.19'
    }

    useEffect(() => {

        axios.post('users/authenticating', testValues)
        .then( res => {
         
            if ( res.data?.message === "Authorized" ) {

                axios.get('https://fakestoreapi.com/products')
                .then( res => {

                    setData( res.data );
                    getCarts( testValues?.user_id ).then( res => setCarts( res ) ).catch(err => console.log(err))

                } )
                .catch( err => console.log(err))

            }

        })
        .catch( err => console.log(err))

        
    }, [ setData, setCarts ])

    carts && console.log(carts)

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