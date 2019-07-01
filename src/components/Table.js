import React from 'react';
import './css/table.css'
//
function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  console.log(input);
  if(input==null) return;
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
 // tr[0].style.display = "";
  for (i = 2; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    console.log(td);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
function TableExampleSimple(){
  
  return(
  
  <div>
   
    
    
      <table align = "center" id = "myTable">
      <thead className="nav-wrapper deep-purple lighten-1">
        <tr className = "software">
            <th>Fund Name</th>

            <th>Fund Number</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Invest. Currency</th>
            <th>Profit</th>
            <th>Profit%</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><input type="text" id="myInput"  onKeyUp={myFunction} /></td>
          <td input type="text"></td>
          <td input type="text"></td>
          <td input type="text"></td>
          <td input type="text"></td>
          <td input type="text"></td>
          <td input type="text"></td>

        </tr>
        <tr>
          <td>GS Funds</td>
          <td>1161516789</td>
          <td>4581589845</td>
          <td>3</td>
          <td>INR</td>
          <th>20</th>
          <th>1%</th>
        </tr>
        <tr>
          <td>EY Funds</td>
          <td>2131566789</td>
          <td>5587588805</td>
          <td>21</td>
          <td>GBP</td>
          <th>20</th>
          <th>1%</th>
        </tr>
        <tr>
          <td>KPMG Funds</td>
          <td>1871916280</td>
          <td>4581589845</td>
          <td>6</td>
          <td>USD</td>
          <th>20</th>
          <th>1%</th>
        </tr>
        <tr>
            <td>PWC Funds</td>
            <td>8765436486</td>
            <td>9381187839</td>
            <td>9</td>
            <td>SGD</td>
            <th>20</th>
            <th>1%</th>
        </tr>
        
      </tbody>
    </table>
    </div>
  )
}
//
export default TableExampleSimple;