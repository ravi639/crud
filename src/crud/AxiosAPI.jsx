import axios from "axios"

export async function AxiosRequest(url, method, headers, parms) {
    return parms ? axios({
        url: url,
        method: method,
        headers: headers,
        data: parms
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {}
    })
}

const GetAPiDetails = () => {

    //get Data
    const headers = {
        'content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details', 'GET', headers, {})

    //Post Data

}
//postData
const PostAPIDetails = (data) => {


    return axios.post('http://localhost:3000/details', data)
}



//DELETE Data
const DeleteAPIDetails = (id) => {
    const headers = {
        'content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id, 'DELETE', headers,{})
}

//DELETE Data
const EditAPIDetails = (id) => {
    const headers = {
        'content-Type': 'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id, 'GET', headers,{})
}

export { GetAPiDetails, PostAPIDetails,DeleteAPIDetails,EditAPIDetails};