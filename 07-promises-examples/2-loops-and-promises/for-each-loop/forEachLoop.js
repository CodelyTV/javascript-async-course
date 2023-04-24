import { searchMonthlyRevenue, searchOpenIncidents, searchTotalCustomers } from "./api.js";

const printCustomerMetric = (wrapperId, query) => async () => {
	const wrapper = document.getElementById(wrapperId);
	const result = await query();

	wrapper.querySelector(".loader").remove();
	wrapper.querySelector(".metric").innerHTML = result;
};

const metricQueries = [
	printCustomerMetric("customers", searchTotalCustomers),
	printCustomerMetric("revenue", searchMonthlyRevenue),
	printCustomerMetric("incidents", searchOpenIncidents),
];

/*
 With a forEach loop the promises are resolved in parallel
*/
metricQueries.forEach((metricQuery) => {
	metricQuery();
});
