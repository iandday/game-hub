import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {    
        key: '08117717118c408980dc82a79cb14b63'
    }
})