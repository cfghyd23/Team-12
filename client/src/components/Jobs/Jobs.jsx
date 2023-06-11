import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./Jobs.css";
import SideBar from "../SideBar";
const Jobs = () => {
	const myfund = [
		{ id: '1', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '2', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '3', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '4', name: "Microsoft", description: "", seats: "", group: "" },
		
		
	];

	return (
		<div style={{display:"flex"}}>
			<SideBar />
			<div className="funds">
				<div className="crop-content">
					{myfund.map(function(fund){
						return(
						<div key = {fund.id} className="card">
							<p id="title">{fund.name}</p>
							<p id="description">{fund.description}</p>
							<p id="seats">{fund.seats}</p>
							<p id="age-group">{fund.group}</p>
						</div>
						)
					}
					)}
				</div>
			</div>
		</div>
	);
};

export default Jobs;
