"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0;

var cartHTML = "<table> <tr> <th>Item</th> <th>Price</th> <th>QTY</th> <th>Total</th> </tr>";

for (var i = 0; i < item.length; i++){
   var itemCost = 0;
   cartHTML += "<tr> <td><img src='tc_"+item[i]+".png' alt='"+item[i]+"' /></td>";
   cartHTML += "<td>"+itemDescription[i]+"</td><td>$"+itemPrice[i]+"</td><td>"+itemQty[i]+"</td>";
   itemCost = itemPrice[i]* itemQty[i];
   cartHTML +="<td>$" + itemCost + "</td></tr>"; 
   orderTotal += itemCost;

}
//total of the order
cartHTML += "<tr><td colspan = '4' > Subtotal</td> <td>$" + orderTotal + "</td></tr></table>";
var elem = document.getElementById("cart");
/*assign value*/
elem.innerHTML = cartHTML;