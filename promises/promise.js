let customers = [
  {
    id: 1,
    name: "Shaymaa Mohamed",
    email: "shaymaasho20683@gmail.com",
  },
];
let orders = [
  {
    order: "iPad",
    customerID: 1,
    creationDate: "23/7/2022",
  },
];

function getCustomer(id) {
  const customer = customers.find((Customer) => (Customer.id = id));
  //console.log("Loading...");
  return new Promise((resolve, reject) => {
    resolve(customer);
  });
}
function getOrder(email) {
  const customer = customers.find((Customer) => (Customer.email = email));
  //console.log("Loading...");
  return new Promise((resolve, reject) => {
    resolve(orders.find((Customer) => (Customer.customerID = customer.id)));
  });
}
getCustomer(1).then((customer) => console.log(customer));

getOrder("shaymaasho20683.com").then((order) => console.log(order));
