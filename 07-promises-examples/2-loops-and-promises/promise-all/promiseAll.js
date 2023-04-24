import { searchMonthlyRevenue, searchOpenIncidents, searchTotalCustomers } from "./api.js";

const printCustomerMetric = (wrapperId, query) => async () => {
	const wrapper = document.getElementById(wrapperId);
	const result = await query();

	wrapper.querySelector(".loader").remove();
	wrapper.querySelector(".metric").innerHTML = result;
};

/*
 With a for loop the promises are resolved sequentially
*/
await Promise.all([
	printCustomerMetric("customers", searchTotalCustomers)(),
	printCustomerMetric("revenue", searchMonthlyRevenue)(),
	printCustomerMetric("incidents", searchOpenIncidents)(),
]);
