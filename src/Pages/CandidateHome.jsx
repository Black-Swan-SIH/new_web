import React from "react";
import Navbar3 from "../components/Navbar3";
import CandidateCards from "../components/candidateCards";
import { borderRadius, height } from "@mui/system";
import Button from "../components/Button";
import { useEffect } from "react";

 
function CandidateHome({ setShowNavbar }) {
  useEffect(() => {

    setShowNavbar(false);

  
    return () => {
      setShowNavbar(true); 
    };
  }, [setShowNavbar]);
  return (
    <>
      <Navbar3 />
      <div
        className=""
        style={{ backgroundColor: "#F2F2F2", width: "100vw", height: "100vh" }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#F2F2F2",
            height: "100%",
            paddingLeft: "15px",
            marginLeft: "175px",
          }}
        >
          <h1 className="m-5 p-5" style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "600"}}>
            Advertisements
          </h1>
          <div className="container">
            <div className="row" style={{ margin: "1px" }}>
              <div className="col-md-3" style={{ marginRight: "55px" }}>
              <CandidateCards height="300px" height2="350px" />
              
                
              </div>

              <div className="col-md-3" style={{ marginRight: "55px" }}>
                <CandidateCards height="250px" height2="350px"/>
              </div>

              <div className="col-md-3" style={{ marginRight: "55px" }}>
                <CandidateCards height="300px" height2="350px"/>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-5 mt-5 pt-5"
                style={{
                  marginLeft: "30px",
                  marginTop: "45px",
                  height: "170px",
                  width: "500px",
                  borderRadius: "15px",
                  backgroundColor: "#8FB0AC",
                }}
              >
                <h1
                  className="mt-4"
                  style={{ fontSize: "18px", fontWeight: "550" }}
                >
                  Public Notice
                </h1>
                <p className="mt-5" style={{ fontSize: "13px" }}>
                  {" "}
                  Requirement of Valid GATE Score for Direct Recruitment of Scientist 'B' in DRDO.
                </p>
                <Button
                  width="200px"
                  bgcolor="black"
                  color="white"
                  children="Download Notice (PDF 161.5KB)"
                  borderRadius="7px"
                  borderColor="black"
                  marginBottom="10px"
                  fontWeight="400"
                  fontSize="11px"
                  marginRight="10px"
                  height="30px"
                  marginTop="30px"
                />
                <hr
                  style={{
                    transform: "rotate(90deg)",
                    marginLeft: "510px",
                    width: "150px",
                    border: "none",
                    backgroundColor: "grey",
                    height: "1px",
                    marginTop: "-80px",
                  }}
                ></hr>
              </div>
              <div
                className="col-md-4"
                style={{
                  marginTop: "50px",
                  marginLeft: "180px",
                  width: "370px",
                  height: "150px",
                }}
              >
                <p className="muted">
                  "Either I will come back after hoisting the tricolor, or I
                  will come back wrapped in it, but I will be back for sure"
                </p>
                <p className="mt-5">
                  <strong>~ Captain Vikram batra, Param Vir chakra</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateHome;
