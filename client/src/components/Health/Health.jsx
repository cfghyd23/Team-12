import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./Health.css";
import SideBar from "../SideBar";
const Health = () => {
	const myfund = [
		{ id: '1', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '2', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '3', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '4', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '5', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '6', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '7', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '8', name: "Microsoft", description: "", seats: "", group: "" },
		{ id: '9', name: "Microsoft", description: "", seats: "", group: "" },
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

export default Health;
