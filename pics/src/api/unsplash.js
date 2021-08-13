import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID h5B-VCmDgr4WVxAPtZRpj2ZBe-PQspVzNpW8rK4ND_c'
    }
})
