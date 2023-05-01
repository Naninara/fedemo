import React from "react";
import Navbar from "./navbar";
import { useEffect,useState } from "react";
import Loader from "./loader";
import axios from "axios";
function Bookingdetails() {
    const [data,setData] = useState([]);
    {useEffect(() => {
        axios.get("https://cobalt-blue-leopard-suit.cyclic.app/getbookingdetails").then((res) => {
         
          setData(res.data);
        });
      }, [])};
      
  return (
    <>
     <Navbar />
      {data.length==0?<Loader/>:
      <div className="container">
        <table class="table table-stdiped">
          <thead>
            <tr>
              <th scope="col">s.no</th>
              <th scope="col">Booked on name</th>
              <th scope="col">Car name</th>
              <th scope="col">Adress</th>
              <th scope="col">from date</th>
              <th scope="col">to date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele,index)=>{
                return (
                    <tr scope="row">
                        <td>{index+1}</td>
                        <td>{ele.user_name}</td>
                        <td>{ele.car_name}</td>
                        <td>{ele.user_Adress}</td>
                        <td>{ele.start_date}</td>
                        <td>{ele.end_date}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>}
    </>
  );
}

export default Bookingdetails;
