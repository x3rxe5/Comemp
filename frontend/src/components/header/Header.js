import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { BACKEND_API_URL } from '../../constant';

// Redux 
import { isAuth } from "./../../slices/AuthSlices";

const PreloginComponent = () =>{
  return(
    <>
       <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
              <Link className="mr-5 hover:text-gray-900" to="/signup">Sign up</Link>

            </nav>
            <Link className="inline-flex items-center bg-green-300 border-0 py-2 px-3 hover:px-4 hover:py-3 animate-pulse focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0" to="/login">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
    </>
  )
}

const PostLoginComponent = () => {
  
  const handleSubmit = async (e) => {
    await axios.get(BACKEND_API_URL+"logout",{ withCredentials:true })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

  }
  return(
    <>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>                    
      </nav>
      <Link className="inline-flex items-center bg-green-300 border-0 py-2 px-3 hover:px-4 hover:py-3 animate-pulse focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0" to="/dashboard">
        Dashboard
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
      <form onSubmit={handleSubmit}>
        <button className="inline-flex items-center bg-red-300 border-0 py-2 px-3 hover:px-4 hover:py-3 animate-pulse focus:outline-none hover:bg-red-500 rounded text-white mt-4 md:mt-0 ml-3">
          Logout ❌
        </button>
      </form>
    </>
  )
}

export default function Header() {
    const { loggedInValue } = useSelector(state => state.authenticationReducers);
    console.log("This is loggedInvalue ",loggedInValue);
    const dispatch = useDispatch();
    useEffect(() => {
      axios.get("http://localhost:5000/validate-cookie",{ withCredentials:true })
      .then(res => {               
          if(res.data.data){
            dispatch(isAuth());
          }
      })
      .catch(err => console.log(err));
    },[dispatch]);


    return (
      <div>
        <header className="text-gray-500 body-font bg-purple-100">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
              <img src="https://img.icons8.com/office/40/000000/year-of-ox.png" alt="logo"/>
    
              <span className="ml-3 text-xl">ComEmp</span>
            </Link>
            { loggedInValue && loggedInValue ? <PostLoginComponent /> : <PreloginComponent />}
          </div>
        </header>
      </div>
    );
}
