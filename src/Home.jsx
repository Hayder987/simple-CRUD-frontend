import { Link } from "react-router";


const Home = () => {

  const formhandler = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user ={
        name, 
        email
    }

    fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
    form.reset()
  }

    return (
        <div>
            <Link to='/users'><button className="border-2 p-3">Users</button></Link>
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
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
           </div>
        </div>
    );
};

export default Home;