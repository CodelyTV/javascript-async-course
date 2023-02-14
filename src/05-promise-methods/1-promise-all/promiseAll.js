function searchTotalCustomers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(500);
    }, 1000);
  });
}

function searchMonthlyRevenue() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10000);
    }, 500);
  });
}

function searchOpenIncidents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
}

const customers = document.getElementById("customers");
const revenue = document.getElementById("revenue");
const incidents = document.getElementById("incidents");

Promise.all([
  searchTotalCustomers(),
  searchMonthlyRevenue(),
  searchOpenIncidents(),
]).then(([customerValue, revenueValue, incidentsValue]) => {
  document.querySelectorAll(".lds-dual-ring").forEach((e) => e.remove());

  customers.innerHTML = customerValue;
  revenue.innerHTML = `${revenueValue}€`;
  incidents.innerHTML = incidentsValue;
});
