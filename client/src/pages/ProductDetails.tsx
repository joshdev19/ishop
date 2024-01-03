import { ProductsType } from "../types/types"

const ProductDetails = ( { id, title, category, description, image, price }:ProductsType ) => {

    return (
        
        <div className="wrapper .products-detail-wrapper">

            <div className="product-detail-container">

                <div className="image-wrapper">
                    <img src={image} alt="" />
                </div>

                <div className="content-wrapper">

                    <div className="title-wrapper">
                        { title }
                    </div>
                    
                    <div className="description"> 
                        { description }
                    </div>


                    <div className="price">
                        { price }
                    </div>

                </div>

            </div>

        </div>

    )

}

export default ProductDetails