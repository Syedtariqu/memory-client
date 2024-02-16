import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
   
    dispatch({ type: AUTH, data });
    window.alert("Login Successfull");
    router.push('/');
  } catch (error) {
    window.alert("Invalid Registration");
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const  data  = await api.signUp(formData);
   
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      } 
   else {
    
       window.alert(" Registration Successfull");
       dispatch({ type: AUTH, data });

       router.push('/');
  }
 
  } catch (error) {

    window.alert("Invalid Registration");
  }
};
