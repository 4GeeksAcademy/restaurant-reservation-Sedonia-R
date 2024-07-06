import React from "react";

const App = () => {
	return (
		<div>
			<div className="inputFields container">
				<input type="text" placeholder="Full Name"/>
				<input type="text" placeholder="Email Address" />
				<input type="text" placeholder="Seats" />
				<div className="dropdown">
					<button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Select One
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">Regular</a>
						<a className="dropdown-item" href="#">Vip</a>
					</div>
				</div>
			</div>
			<div className="reserveButton">
				<button className="btn btn-primary">add reservation</button>
			</div>
			<br/>
			<div className="row container-fluid data">
				<div className="col-4">Full Name</div>
				<div className="col-4">Email</div>
				<div className="col-2">Seats</div>
				<div className="col-2">Service</div>
			</div>
		</div>
	);
};

export default App;