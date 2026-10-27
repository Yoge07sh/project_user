import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
const apiUrl = import.meta.env.VITE_API_URL;
function MyOrder() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    return alert("plz login to view ypur orders");
  }
  let email = localStorage.getItem("email");
 const data = {
    email: email,
  };
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    axios({
      url: apiUrl + "/my/orders",
      method: "post",
      data: data,
    })
      .then((res) => {
        setMyOrders(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return <h1>hlo</h1>;
}
export default MyOrder;
