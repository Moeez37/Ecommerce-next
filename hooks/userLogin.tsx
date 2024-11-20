"use client"
import { useState } from "react";


function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const { id, value } = event.target;
    
    setTimeout(() => {
      if (id === "email") {
        setEmail(value);
      } else if (id === "password") {
        setPassword(value);
      }
    }, 100);

  };

  const onSubmit = (event: React.FormEvent) => {
    setloading(true)
    event.preventDefault(); 
    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
          username: "mor_2314",
          password: "83r5^_"
      })
  })
      .then(res=>res.json())
      .then(json=>{
        localStorage.setItem("access-token",json.token)
        setloading(false)
      }).
      catch((error)=>{
        console.log("error occured")
          setloading(false)
      })
};

  return {
    email,
    password,
    onChangeHandler,
    onSubmit,
    loading
  };
}

export default useLogin;
