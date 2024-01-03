import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../types/types";
import ProductItems from "../components/ProductItems";

const Products = () => {

    const [ data, setData ] = useState<ProductsType[]>();

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
        .then( res => setData( res.data ) )
        .catch( err => console.log(err))

    }, [ setData ])

    data && console.log(data);

    return (
        <div className="wrapper products-wrapper">

            {
                data && data?.map( p => {

                    return <ProductItems key={ p?.id } { ...p } />

                })
            }

        </div>
    )

}

export default Products;