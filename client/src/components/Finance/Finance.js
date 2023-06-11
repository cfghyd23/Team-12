import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./FinStyles.css";
import SideBar from "../SideBar";
const Finance = () => {
	const myfund = [
		{ id: '1', name: "Microsoft", description: "A great learning experience for all age groups across all financial verticals", seats: "10", group: "1" },
		{ id: '2', name: "SalesForce", description: "A great learning experience for all age groups across all financial verticals", seats: "20", group: "1" },
		{ id: '3', name: "Internshala", description: "A great learning experience for all age groups across all financial verticals", seats: "30", group: "1" },
		{ id: '4', name: "JP Morgan Chase", description: "A great learning experience for all age groups across all financial verticals", seats: "40", group: "1" },
		
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

export default Finance;
