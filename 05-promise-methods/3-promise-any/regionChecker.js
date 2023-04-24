import { ping } from "./ping.js";

//http://ec2-reachability.amazonaws.com/
const AWSRegions = [
	{ region: "USEAST", ip: "23.23.255.255" },
	{ region: "USWEST", ip: "52.9.63.252" },
	{ region: "EUROPE", ip: "35.156.63.252" },
	{ region: "ASIA", ip: "18.163.0.253" },
];

const fastestRegion = await Promise.any([
	ping(AWSRegions[0]),
	ping(AWSRegions[1]),
	ping(AWSRegions[2]),
	ping(AWSRegions[3]),
]);

console.log(
	`The region with less latency is ${fastestRegion.region} with ip: ${fastestRegion.ip} 🚀`
);
