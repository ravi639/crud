import React from 'react';
// import { GetAPIAction,DeleteAPIAction } from '../Action/index/';
import { GetAPIAction,DeleteAPIAction } from '../Action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SubmitData from './SubmitData';
import { Link } from 'react-router-dom';


function Home() {

    const returnData = useSelector((state) => state.reducer.details)
    const DeleteData = useSelector((state) => state.reducer.isDelete)
    console.log(returnData, 'returnData');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAPIAction())
        // console.log("UseEffect WOrked");
    }, [dispatch])  

    if(DeleteData)
    {
        window.location.reload(false)
    }

    const result = returnData ? returnData.map((res)=> {
            return<>
               <tr key={res.id}>
                                            <td>{res.id}</td>
                                            <td>{res.name}</td>
                                            <td>{res.email}</td>
                                            <td>{res.phone}</td>
                                            <td>{res.country}</td>
                                            <td><button className='btn btn-danger' onClick={()=>dispatch(DeleteAPIAction(res.id))}>Delete</button></td>
                                            <td><Link to={`Update/${res.id}`}><button className='btn btn-success'>Edit</button></Link></td>
                                        </tr>
            </>
    }):null;

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <center><h1 className='text-danger'>Welcome To Redux</h1></center>
                    <div className="col mt-5">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>

                            </thead>
                            <tbody>
                               {result}

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
            <SubmitData/>
        </>
    )
}

export default Home;


/*
1 . DB => db.json 
2 . CRUD FOLDER => AXIOSAPI.jsx
3 => npm install -g json-server
4 => json-server --watch db.json ==> will get resources File
5 => Creating UI ==> CRUD FOLDER =>  Home.jsx
6 => ACTIONS => Action
7 => Reducer => Reducer.jsx
8 => Reducer => index.jsx
9 => store.jsx
10 => provider 

// npm install -g json-server
// json-server --watch db.json

*/