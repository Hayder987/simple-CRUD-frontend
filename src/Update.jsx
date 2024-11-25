import { useLoaderData } from "react-router";


const Update = () => {

    const data = useLoaderData()
    console.log(data)
    
    const formhandler = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const user ={
            name, 
            email
        }
        fetch(`http://localhost:5000/users/${data._id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data1 => {
        console.log(data1)
        })

    }
    return (
        <div>
           <h1 className="text-2xl"> Update userData {data.name}</h1> 

           <div className="flex justify-center items-center">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={formhandler} className="card-body">
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                 
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
           </div>
        </div>
    );
};

export default Update;