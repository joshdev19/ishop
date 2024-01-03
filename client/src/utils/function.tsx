import axios from "axios";

export const getCarts = async ( id: string ) =>  {

    try {
            
        const request = await axios.get(`user/carts/${id}`);

        const response = await request.data;
        
        return response?.result

    } catch (error) {
        
        console.log(error)

    }

}