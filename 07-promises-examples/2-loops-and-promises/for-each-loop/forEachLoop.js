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
 With a forEach loop the promises are resolved in parallel
*/
metricQueries.forEach(async (metricQuery) => {
	const [query, selector] = metricQuery;
	const result = await query();
	printCustomerMetric(selector, result);
});
