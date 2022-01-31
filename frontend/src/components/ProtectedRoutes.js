import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { BACKEND_API_URL } from "../constant";
import { isAuth } from "../slices/AuthSlices";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const { loggedInValue } =  useSelector(state => state.authenticationReducers);
  const dispatch = useDispatch();
    useEffect(() => {
      axios.get(BACKEND_API_URL+"validate-cookie",{ withCredentials:true })
      .then(res => {     
          if(res.data.data){
            dispatch(isAuth());
          }
      })
      .catch(err => console.log(err));
  },[dispatch]);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        loggedInValue ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;