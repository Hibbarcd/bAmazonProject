const inquirer = require('inquirer');
const mysql = require('mysql');



const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'RazorRazor9',
  database: 'bamazonDB',
});

connection.connect((err) => {

    if (err) throw err;

    console.log(`\nConnected with ID ${connection.threadId}`)

  })
  //=============================inventory view------------------------------------------------------
      function inventoryView() {
          var query = "SELECT item_id,product_name, department_name, price,stock_quantity FROM products ";
          connection.query(query, { products: inventoryView.products }, function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
              console.log("ID:  " + res[i].item_id + "   Product   " + res[i].product_name + "    Dpt :   " + res[i].department_name + "      Units :" + res[i].stock_quantity + "    Cost :   " + res[i].price);
            }
          
          });
        }
        inventoryView();
        
inquirer
.prompt([
{
  type: "input",
  message: "Enter ID of product to purchase?",
  name: "product",
},
{
  type: "input",
  message: "How many units desired?",
  name: "purchase"
}
])
.then(function(answer) {

  var query = "SELECT product_name, stock_quantity, price FROM products WHERE item_id =" + answer.product;
  connection.query(query,  function(err, res) {
      for (var i = 0; i < res.length; i++) {
          if (err || answer.purchase > res[i].stock_quantity) {

            console.log("Not enough in stock!");
            console.log("\nOrdering " + res[i].stock_quantity + ' of the ' + res[i].product_name + "(s)" + " for now, until more are stocked");
          }
          else (
            console.log("\nOrdering: " + answer.purchase + " of the " + res[i].product_name + "(s)"));
          
          }
        });       
    var query = "SELECT price, stock_quantity FROM products where item_id =" + answer.product;
    connection.query(query,  function(err, res) {
      for (var i = 0; i < res.length; i++) {
      if (err) throw err;
      console.log("\nYour total price will be: " + (res[i].price*answer.purchase) + " for " + answer.purchase + " units");
      console.log("\nThere are " + (res[i].stock_quantity - answer.purchase) + " units remaining");
      }
    });
  });

