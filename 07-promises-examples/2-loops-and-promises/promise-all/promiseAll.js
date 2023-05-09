import { searchMonthlyRevenue, searchOpenIncidents, searchTotalCustomers } from "./api.js";

const printCustomerMetric = (wrapperId, result) => {
	const wrapper = document.getElementById(wrapperId);

	wrapper.querySelector(".loader").remove();
	wrapper.querySelector(".metric").innerHTML = result;
};

Promise.all([searchTotalCustomers(), searchMonthlyRevenue(), searchOpenIncidents()]).then(
	([customers, revenue, incidents]) => {
		printCustomerMetric("customers", customers);
		printCustomerMetric("revenue", revenue);
		printCustomerMetric("incidents", incidents);
	}
);
