// import { GetAPiDetails,PostAPIDetails } from "../actions/index";
import { useEffect, useState } from 'react'
import {DeleteAPIDetails, GetAPiDetails,PostAPIDetails,EditAPIDetails} from '../crud/AxiosAPI'


export const GetAPIAction = () => {
    return async function (dispatch) {// as like action.type==> passing this function for action
        const res = await GetAPiDetails()
        // console.log(res, 'from action --> index');
        dispatch({
            type: 'GET_DETAILS',
            payload: res.data
        })
    }
}

// why dispatch

export const PostAPIAction = (data) => {

    return async function (dispatch) {

        // as like action.type==> passing this function for action

        const res = await PostAPIDetails(data)
        console.log(res)
        dispatch({
            type: 'POST_DETAILS',
            payload: '' //we will get data so payload in empty
        })
    }
}

//for delete same as  GetAPIAction 

export const DeleteAPIAction = (id) => {

    return async function (dispatch) {

        // as like action.type==> passing this function for action

        const res = await DeleteAPIDetails(id)
        console.log("delete this", res)
        dispatch({
            type: 'DELETE_DETAILS',
            payload: '' //we will get data so payload in empty
        })
    }
}

//edit data
export default(props)=>{
    const[detailsbyid,setdetailsbyid] = useState({})
    const GetDetailsID =(requestid)=>{
        console.log("edit data...",requestid);
        return EditAPIDetails(requestid).then((res)=>{
            console.log(res.id);
            setdetailsbyid(res)
        })
    }

    useEffect(()=>{
        GetDetailsID(props)
    },[])
    return[detailsbyid];
 }