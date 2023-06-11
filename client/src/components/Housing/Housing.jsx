import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./Housing.css";
import SideBar from "../SideBar";
const Housing = () => {
	const myfund = [
		{ id: '1', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '2', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '3', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '4', name: "Microsoft", description: "", seats: "", group: "" },
		
		
	];

	return (
		<>
		<SideBar />
		<div style={{display:"flex"}}>
			<div className="funds">
				<div className="crop-content">
					{myfund.map(function(fund){
						return(
						<div key = {fund.id} className="card">
							<p id="title">{fund.name}</p>
							<p id="description">{fund.description}</p>
							<p id="seats">Seats Left : {fund.seats}</p>
							<p id="age-group">Group ID : {fund.group}</p>
						</div>
						)
					}
					)}
				</div>
			</div>
		</div>
		</>
	);
};

export default Housing;
