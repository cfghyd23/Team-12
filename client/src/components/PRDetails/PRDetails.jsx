import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../SideBar";
import ReactDOM from "react-dom";
function PRDetails() {
	let [PRdata, setPRData] = useState([]);
	let tempData = {
        name: "",
        email: "",
        userType: "",
    };

	const getPRs = async () => {
		fetch("http://localhost:5000/getAllUser", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
                console.log(data);
				setPRData(data.data);

			});
	};

	useEffect((e) => {
		getPRs();
	});

	const faTrash = require("@fortawesome/free-solid-svg-icons/faTrash");
	return (
		<>
        <div style={{display:"flex"}}>
			<SideBar />
			<div style={{ display: "flex", height: "100vh", alignItems:"center", justifyContent:"center"}}>
				<table style={{ padding:"20px", width: "80vw"}}>
                    <thead style={{padding: "20px", backgroundColor: "ash"}}>
					<tr style={{height:"fitContent"}}>
						<th>Name</th>
						<th>Email</th>
						<th>User Type</th>
						<th>Delete</th>
					</tr>
                    </thead>
					{PRdata.map((i, id) => {
						return (
							<tbody>
								<tr key={id}>
									<td>{i.fname}</td>
									<td>{i.email}</td>
									<td>{i.userType}</td>
                                    <td>
									<button className="approveBtn">
                                        Approve
                                    </button>

									<button style={{margenLeft:"20px"}} className="declineBtn">
                                        Decline
                                    </button>
                                    </td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
            </div>
		</>
	);
}

export default PRDetails;
