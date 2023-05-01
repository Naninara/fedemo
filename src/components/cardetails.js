import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";

import Navbar from "./navbar";
function Cardetails() {
  const location = useLocation();
  let [BookingDetails, SetBookingDetails] = useState({
    car_name:location.state.car_name,
    car_fuel:location.state.car_fuel,
    car_image:location.state.car_image,
    car_rent:location.state.car_rent,
    car_seating:location.state.car_seating,
    name: "",
    mobile: "",
    address: "",
    StartTime: "",
    EndTime: "",
  });
  const HandleForm = (e) => {
    SetBookingDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const PostData = (e) => {
    e.preventDefault();

    axios.post("https://cobalt-blue-leopard-suit.cyclic.app/bookingdetails",{BookingDetails}).then((res)=>{
      SetBookingDetails(res.data);
      alert("booking successful please pay the payment")
    }).catch(err=>{
      console.log(err);
    })
  };
  let FormData = (
    <div>
      <form onSubmit={PostData}>
        <TextField
          className="IN"
          id="outlined-basic"
          label="Name"
          name="name"
          variant="outlined"
          onChange={HandleForm}
        />
        <br />
        <br />
        <TextField
          className="IN"
          name="mobile"
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
          onChange={HandleForm}
        />
        <br />
        <br />
        <TextField
          name="address"
          className="IN"
          id="outlined-textarea"
          label="Address"
          placeholder="Placeholder"
          onChange={HandleForm}
          multiline
        />
        <br />
        <br />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <label htmlFor="StDate">From Date</label>
          <input
            name="StartTime"
            id="StDate"
            type="datetime-local"
            onChange={HandleForm}
            style={{
              width: "100%",
              border: "1.5px solid lightgrey",
              margin: "3px 0px 0px 0px",
              padding: "5px",
            }}
          />
          <label htmlFor="StDate">To Date</label>
          <input
          required
            name="EndTime"
            id="StDate"
            type="datetime-local"
            onChange={HandleForm}
            style={{
              width: "100%",
              border: "1.5px solid lightgrey",
              margin: "3px 0px 0px 0px",
              padding: "5px",
            }}
          />
        </div>
        <br />
        <br />
        <button
                style={{
                  marginBlockStart: "1%",
                  marginInlineStart: "0%",
                }}
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                
                type="submit"
              >
                Go to Payment
              </button>
      </form>
    </div>
  );

  return (
    <>
      <Navbar />

      
      <div className="singlecarmain">
        <div className="carbooking">
          <div className="carimg">
            <div className="card ">
              <div className="card-body mt-5">
                <div className="card ">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={location.state.car_image}
                        className="img-fluid mt-4 m-auto rounded"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <h3 className="card-title">
                          {location.state.car_name}
                        </h3>
                        <hr />
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {location.state.car_rent} Rent Per hour /-
                          </small>

                          <br />
                          <small className="text-body-secondary">
                            Description : {location.state.car_description}
                          </small>
                          <br />
                          <small className="text-body-secondary">
                            Fuel Type : {location.state.car_fuel}
                          </small>
                          <br />
                          <small className="text-body-secondary">
                            Max Persons : {location.state.car_seating}
                          </small>
                          <br />
                          <hr />
                          <small className="text-body-secondary">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-outline-1"
                              data-bs-target="#exampleModalToggle"
                              data-bs-toggle="modal"
                            >
                              Book Car
                            </button>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div
          className="modal-dialog modal-dialog-centered "
          style={{
            width: "auto",
            maxWidth: "500px",
            minWidth: "310px",
          }}
        >
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Enter Your Details
              </h1>
              <button
                type="button"
                className="btn-close bg-light "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                padding: "30px",
              }}
            >
              {FormData}
              
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Payment
              </h1>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">For rent total amount is Rs{location.state.car_rent}/-</div>
            <div className="modal-footer">
              <Link to="/payment">
              <button className="btn btn-primary" data-bs-dismiss="modal">
                Proceed to payment
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardetails;
