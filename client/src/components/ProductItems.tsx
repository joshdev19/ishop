import { Link } from "react-router-dom";
import { ProductsType } from "../types/types";

const ProductItems = ( { id, image, title, description, price }: ProductsType ) => {

    return (
        <Link to={`/product/details/${id}`} className="products">

            <div className="image-wrapper">
                <img src={ image } alt="" />
            </div>

            <div className="content-wrapper">
                <div className="title"> { title } </div>
                <div className="description"> {

                    description.substring(0, 100) + '...'

                } </div>
                <div className="price"> { `$${price}` } </div>
            </div>

        </Link>
    )

}

export default ProductItems;