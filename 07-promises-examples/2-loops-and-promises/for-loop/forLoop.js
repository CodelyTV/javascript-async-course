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
 With a for loop the promises are resolved sequentially
*/
for (let index = 0; index < metricQueries.length; index++) {
	const metricQuery = metricQueries[index];
	await metricQuery();
}
