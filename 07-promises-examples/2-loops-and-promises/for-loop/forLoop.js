/* eslint-disable no-await-in-loop */
import { searchMonthlyRevenue, searchOpenIncidents, searchTotalCustomers } from "./api.js";

const printCustomerMetric = (wrapperId, result) => {
	const wrapper = document.getElementById(wrapperId);

	wrapper.querySelector(".loader").remove();
	wrapper.querySelector(".metric").innerHTML = result;
};

const metricQueries = [
	[searchTotalCustomers, "customers"],
	[searchMonthlyRevenue, "revenue"],
	[searchOpenIncidents, "incidents"],
];

/*
 With a for loop the promises are resolved sequentially
*/
for (let index = 0; index < metricQueries.length; index++) {
	const [metricQuery, selector] = metricQueries[index];
	const result = await metricQuery();
	printCustomerMetric(selector, result);
}
