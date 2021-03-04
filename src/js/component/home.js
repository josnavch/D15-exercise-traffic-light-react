import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let [luzRed, setLuzRed] = useState(true);
	let [luzYellow, setLuzYellow] = useState(false);
	let [luzGreen, setLuzGreen] = useState(false);
	const [lightOnRed, setlightRed] = useState("none");
	const [lightOnYellow, setlightYellow] = useState("none");
	const [lightOnGreen, setlightGreen] = useState("none");

	function cambioRed() {
		if (luzRed == false) {
			setLuzRed(true);
			setLuzYellow(false);
			setLuzGreen(false);
		} else {
			setLuzRed(false);
		}
	}
	function cambioYellow() {
		if (luzYellow == false) {
			setLuzYellow(true);
			setLuzRed(false);
			setLuzGreen(false);
		} else {
			setLuzYellow(false);
		}
	}
	function cambioGreen() {
		if (luzGreen == false) {
			setLuzGreen(true);
			setLuzRed(false);
			setLuzYellow(false);
		} else {
			setLuzGreen(false);
		}
	}
	useEffect(() => {
		setlightRed(luzRed ? "selected" : "");
		//	console.log(lightOnRed, luzRed, luzYellow, luzGreen);
	}, [luzRed]);
	useEffect(() => {
		setlightYellow(luzYellow ? "selected" : "");
		//	console.log(lightOnYellow, luzRed, luzYellow, luzGreen);
	}, [luzYellow]);
	useEffect(() => {
		setlightGreen(luzGreen ? "selected" : "");
		//	console.log(lightOnGreen, luzRed, luzYellow, luzGreen);
	}, [luzGreen]);

	return (
		<div>
			<div id="trafficTop"> </div>
			<div className="container">
				<div>
					<button
						className={"button red " + lightOnRed}
						onClick={cambioRed}></button>
				</div>
				<div>
					<button
						className={"button yellow " + lightOnYellow}
						onClick={cambioYellow}></button>
				</div>
				<div>
					<button
						className={"button green " + lightOnGreen}
						onClick={cambioGreen}></button>
				</div>
			</div>
		</div>
	);
}
