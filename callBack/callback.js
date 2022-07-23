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
  console.log("Loading...");
  setTimeout(() => {
    console.log(customer);
  }, 2000);
}

function getOrder(email) {
  const customer = customers.find((Customer) => (Customer.email = email));
  console.log("Loading...");
  setTimeout(() => {
    console.log(orders.find((Customer) => (Customer.customerID = customer.id)));
  }, 3000);
}
getCustomer(1);
getOrder("shaymaasho20683@gmail.com");
