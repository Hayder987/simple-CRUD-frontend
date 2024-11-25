import { useState } from "react";
import { Link, useLoaderData } from "react-router";


const Users = () => {

    const allData = useLoaderData()
    const [data, setData] = useState(allData)

    const deleteHandler =(_id)=>{
        fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data1=>{
            console.log(data1)
            if(data1.deletedCount>0){
                alert("user Delete Success")
                const remaning = data.filter(item=> item._id !== _id)
                setData(remaning)
            }
           
        })
    }

    return (
        <div className="p-12 flex flex-col gap-4">
            <Link to="/" >Home</Link>
            {
                data.map(item=>(
                    <div key={item._id} className="">
                        <p className="">  {item.name} : {item.email} : {item._id}
                            <Link to={`/user/${item._id}`}><button className="border-2 p-2">Update</button> </Link>
                            <button onClick={()=>deleteHandler(item._id)} className="border-2 p-2">X</button>
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;