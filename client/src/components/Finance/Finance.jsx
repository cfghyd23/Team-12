import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./Finance.css";
import SideBar from "../Sidebar";
const Career = () => {

  const [funds, setFunds] = useState(myfund)
  const handleFunds = (fund) => {
    setFunds(fund);
  }
  

  return (
    <SideBar>
    <div className="funds">
    

      <ButtonGroup className="fund">
        
        
      </ButtonGroup>

      <div className="crop-content">
       

        {funds.map((key=myfund.id,fund) =>
        (<div className="card">
          <p id="title">{fund.name}</p>
          <p id="description" >{fund.description}</p>
          <p id="seats">{fund.seats}</p>
          <p id="age-group">{fund.group}</p>
        </div>
        ))
        }
      </div></div>
  
</SideBar>

  )

}
const myfund = [
  { "id":1,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":2,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":3,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":4,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":5,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":6,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":7,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
  { "id":8,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":"" 
  },
  { "id":9,
    "name": "Microsoft",
    "description": "",
    "seats":"",
    "group":""
  },
]
export default Career;