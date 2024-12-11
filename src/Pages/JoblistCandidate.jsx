import React from 'react';
import Navbar3 from '../components/Navbar3';
import { useEffect, useState } from 'react';
import '../styles/joblist.css';
import Button from '../components/Button';
import '../styles/dropdown.css';


function JoblistCandidate({setShowNavbar,height}) {

    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(`Selected option: ${option}`);
  };


    useEffect(() => {
    
        setShowNavbar(false);
        return () => {
          setShowNavbar(true); 
        };
      }, [setShowNavbar]);

    
    return ( <>
    <div style={{backgroundColor:"#FAFAFA", width:"1510px", height:"900px"}}>
    <Navbar3/>
        
        <div className="container">
            <div className="row mt-5 pl-5 ml-5 pt-5" style={{marginTop:"45px"}}>
                <div className="col-md-5">
                    <div className="row">
                    <h1 style={{fontSize:"30px", fontWeight:"550"}}>Jobs</h1>
                    </div>
                    <div className="row" style={{display:"flex", marginTop:"10px",paddingLeft:"4px"}}>
                       <div className="text-muted" style={{marginLeft:""}}>Jobs
                       <div style={{border:"1px lightGrey solid", width:"140px"}}></div>
                       <div style={{color:"black",fontSize:"30px",marginTop:"8px",fontWeight:"550"}}>11.26 K</div>
                       </div>
                       <div style={{marginLeft:"70px"}}>Opened
                       <div style={{border:"1px lightGrey solid", width:"140px"}}></div>
                       <div style={{color:"black",fontSize:"30px",marginTop:"8px",fontWeight:"550"}}>11.26 K</div>
                       </div>
                       <div style={{marginLeft:"70px"}}>Closed
                       <div style={{border:"1px lightGrey solid", width:"140px"}}></div>
                       <div style={{color:"black",fontSize:"30px",marginTop:"8px",fontWeight:"550"}}>11.26 K</div>
                       </div>
                    </div>
                    
                </div>
                <div className="col-lg-7" >
                <div className="search-container" style={{ width: "500px"}}> 
                    <div className="search-input" style={{height:"40px"}}>
                        <span className="search-icon"> <i
                        className="fa-solid fa-magnifying-glass"
                        style={{ marginRight: "5px",marginLeft:"5px" }}
                         ></i></span>
                        <input type="text" placeholder="Search..." style={{color:"grey"}} />
                        <button className="search-button">Ctrl+k</button>
                    </div>
                    </div>
                    
                    <div style={{display:"flex", marginTop:"10px"}}>
                        <div className="search-container" style={{ width: "220px",marginLeft:"95px"}}>
                            <div className="search-input" style={{height:"40px", width:"50px"}}>
                                
                            <input type="text" placeholder="Sort by" style={{color:"grey"}} />
                            <div className="dropdown-container">
      <div className="dropdown-box" onClick={toggleDropdown}>
        {/* <span>{selectedOption || 'Sort By'}</span> */}
        <div className="dropdown-arrow">&#9660;</div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div
            className="dropdown-option"
            onClick={() => handleOptionClick('Oldest')}
          >
            Oldest
          </div>
          <div
            className="dropdown-option"
            onClick={() => handleOptionClick('Latest')}
          >
            Latest
          </div>
        </div>
      )}
    </div>
                            </div>
                        </div>

                        <div className="search-container" style={{ width: "130px",marginRight:"240px"}}>
                            <div className="search-input" style={{height:"40px", width:"50px"}}>
                                
                            <input type="text" placeholder="All" style={{color:"grey"}} />
                           
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
            <div className="row mt-5 pt-5 ml-5 pl-5" style={{display:"flex"}}>
            <div
        style={{
          marginRight: "35px",
          width: "420px",
          borderRadius: "10px",
          marginTop: "10px",
          backgroundColor: "white",
          height:"380px"

        }}
      >
        <div className="ml-5 pl-2">
          <Button
            marginRight="10px"
            bgcolor="lightGrey"
            marginTop="15px"
            width="70px"
            height="20px"
            borderRadius="20px"
            color="black"
            children="opened"
          />
          <h1
            className="mt-5 pt-5"
            style={{ fontWeight: "550", fontSize: "16px" }}
          >
            Node.js Developer
          </h1>
          <div style={{display:"flex", marginTop:"8px"}}>
          <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>type:</span> Internship
          </h1>

          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>Department:</span> ministry of defense
          </h1>
          </div>
          <div style={{display:"flex"}}>
          <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>type:</span> Internship
          </h1>

          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>Department:</span> ministry of defense
          </h1>
          </div>
          
          
          <ul >
            <li>
          
              <div>
                <div style={{backgroundColor:"#9CAFB7",height:"120px",width:"350px",borderRadius:"10px",
                    marginTop:"20px"
                }}>
                    <h1 className='p-3' style={{fontSize:"18px",fontWeight:"500"}}>Job Description</h1>
                    <p className=' p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsa porro rerum fugiat ?</p>
                </div>
              </div>
             <div className="mt-5">
                <div style={{height:"140px",width:"350px",borderRadius:"10px",
                    marginTop:"20px"
                }}>
                    <h1 className='p-3' style={{fontSize:"18px",fontWeight:"500"}}>Skills Required</h1>
                    <p className=' p-3'>Lorem ipsum dolor, sit amet consectetur ?</p>
                </div>
             </div>



            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginRight: "35px",
          width: "420px",
          borderRadius: "10px",
          marginTop: "10px",
          backgroundColor: "white",
          height:"380px"

        }}
      >
        <div className="ml-5 pl-2">
          <Button
            marginRight="10px"
            bgcolor="lightGrey"
            marginTop="15px"
            width="70px"
            height="20px"
            borderRadius="20px"
            color="black"
            children="opened"
          />
          <h1
            className="mt-5 pt-5"
            style={{ fontWeight: "550", fontSize: "16px" }}
          >
            Node.js Developer
          </h1>
          <div style={{display:"flex", marginTop:"8px"}}>
          <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>type:</span> Internship
          </h1>

          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>Department:</span> ministry of defense
          </h1>
          </div>
          <div style={{display:"flex"}}>
          <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>type:</span> Internship
          </h1>

          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>Department:</span> ministry of defense
          </h1>
          </div>
          
          
          <ul >
            <li>
          
              <div>
                <div style={{backgroundColor:"#9CAFB7",height:"120px",width:"350px",borderRadius:"10px",
                    marginTop:"20px"
                }}>
                    <h1 className='p-3' style={{fontSize:"18px",fontWeight:"500"}}>Job Description</h1>
                    <p className=' p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsa porro rerum fugiat ?</p>
                </div>
              </div>
             <div className="mt-5">
                <div style={{height:"140px",width:"350px",borderRadius:"10px",
                    marginTop:"20px"
                }}>
                    <h1 className='p-3' style={{fontSize:"18px",fontWeight:"500"}}>Skills Required</h1>
                    <p className=' p-3'>Lorem ipsum dolor, sit amet consectetur ?</p>
                </div>
             </div>



            </li>
          </ul>
        </div>
      </div>



           <div
        style={{
          marginRight: "35px",
          width: "420px",
          borderRadius: "10px",
          marginTop: "10px",
          backgroundColor: "white",
          height:"380px"

        }}
      >
        <div className="ml-5 pl-2">
          <Button
            marginRight="10px"
            bgcolor="lightGrey"
            marginTop="15px"
            width="70px"
            height="20px"
            borderRadius="20px"
            color="black"
            children="opened"
          />
          <h1
            className="mt-5 pt-5"
            style={{ fontWeight: "550", fontSize: "16px" }}
          >
            Node.js Developer
          </h1>
          <div style={{display:"flex", marginTop:"8px"}}>
          <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>type:</span> Internship
          </h1>

          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>Department:</span> ministry of defense
          </h1>
          </div>
          <div style={{display:"flex"}}>
          <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>type:</span> Internship
          </h1>

          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <span className='text-muted'>Department:</span> ministry of defense
          </h1>
          </div>
          
          
          <ul >
            <li>
          
              <div>
                <div style={{backgroundColor:"#9CAFB7",height:"120px",width:"350px",borderRadius:"10px",
                    marginTop:"20px"
                }}>
                    <h1 className='p-3' style={{fontSize:"18px",fontWeight:"500"}}>Job Description</h1>
                    <p className=' p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsa porro rerum fugiat ?</p>
                </div>
              </div>
             <div className="mt-5">
                <div style={{height:"140px",width:"350px",borderRadius:"10px",
                    marginTop:"20px"
                }}>
                    <h1 className='p-3' style={{fontSize:"18px",fontWeight:"500"}}>Skills Required</h1>
                    <p className='p-3'>Lorem ipsum dolor, sit amet consectetur ?</p>
                </div>
             </div>



            </li>
          </ul>
        </div>
      </div>
            </div>
        </div>
    </div>
        
       
    </> );
}

export default JoblistCandidate;