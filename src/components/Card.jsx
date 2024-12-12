import { border } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Cards({imageSrc, jobs, applications, open,backgColor,onClick,userId }) {
  const navigate=useNavigate();

  const handleClick = () => {
    console.log(userId);
    navigate("/admin/job",{state:{userId}});
  }

    return ( <>
        <div className="card mb-3" style={{border:"1px #96DBC2 solid",width:"370px",height:"90px",borderRadius:"12px",backgroundColor:"#8EB7A8"}}
        onClick={handleClick}>
  <div className="row" style={{}}>
    <div className="col-md-4" style={{border:"1px #E6E6E6 solid",height:"75px", width:"75px",marginLeft:"23px", marginTop: "7px" ,borderRadius:"8px", backgroundColor:"#E6E6E6"}}>
    <img src={imageSrc} alt="Job Image" style={{objectFit:"contain",width:"100%" ,height:"100%"}}/>
      {/* <img src="https://static.vecteezy.com/system/resources/previews/008/306/791/non_2x/square-with-round-corner-glyph-black-icon-vector.jpg" class="img-fluid rounded-start" alt="dog" style={{height:"80px",width:"90px"}}/> */}
    </div>
    <div className="col-md-8" >
      <div className="card-body mt-3 pt-2">
        <h5 className="card-title" style={{fontSize:"20px",fontWeight:"600", color: "#202020"}}>{jobs}</h5>
        <p className="card-text mt-2" style={{color: "#2B2B2B", fontSize: "13px", fontWeight: "500"}}>Applications : {applications}</p>
        <p className="card-text text-muted mt-2" style={{fontSize:"10px", color: "#3D3D3D", fontWeight: "500"}}><p className="text-body-secondary"></p>{open}</p>
      </div>
    </div>
  </div>
</div>
    </>
);
}

export default Cards;