import React, { Component } from 'react'
import './css/table.css'


class Table2 extends Component
{
    constructor()
    {
        super()
        this.state = {
            list : [
              {
                fundName : 'fundname',
                fundNumber : '145',
                INV : 'Inv',
                rating : 238945394,
                quantity : 10,
                NAV : 400,
                setCycle : 5,
                invCurr : 'INR',
                profit : '5%'
              },
              {
                fundName : 'fundname',
                fundNumber : '134',
                INV : 'Inv',
                rating : 238945394,
                quantity : 10,
                NAV : 400,
                setCycle : 5,
                invCurr : 'INR',
                profit : '5%'
              },
              {
                fundName : 'hndname',
                fundNumber : '123',
                INV : 'Inv',
                rating : 238945394,
                quantity : 10,
                NAV : 400,
                setCycle : 5,
                invCurr : 'INR',
                profit : '5%'
              }
            ]
        }
    }

    myFunction(fields) {
      var filters=[]
      var input, filter, table, tr, td, i, txtValue;
      for(var index = 0;index < fields;index++)
      {
        
          input = document.getElementById("myInput"+index);
          console.log(input);
          if(input==null) continue;
          filter = input.value.toUpperCase();
          filters.push(filter);
      }
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      
      for (i = 2; i < tr.length; i++) 
      {
        var f = true;
        for(var index = 0;index<filters.length;index++)
        {
          td=tr[i].getElementsByTagName("td")[index];
          if(td)
          {
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filters[index]) == -1)
            {
              f=false;
              break;
            }
          }
        }
        if(f)
          tr[i].style.display = "";
        else
          tr[i].style.display = "none";
        
      }
      
    }
    render()
    {
        return (
        
            <div>
            <table align = "center" id = "myTable">
            <thead>
              <tr className = "software">
                  <th>Fund Name</th>
                  <th>Fund Number</th>
                  <th>Investment Manager</th>
                  <th>Rating</th>
                  <th>Quantity</th>
                  <th>NAV</th>
                  <th>Sett. Cycle</th>
                  <th>Invest. Currency</th>
                  <th>Profit%</th>
              </tr>
            </thead>

            <tbody>
            <tr>
                  <td><input type="text" id="myInput0"  onKeyUp={() => this.myFunction(2)} /></td> 
                  <td><input type="text" id="myInput1"  onKeyUp={() => this.myFunction(2)} /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>


              </tr>
              {              
                
                this.state.list.map(item => <tr>
                  <td>{item.fundName}</td>
                  <td>{item.fundNumber}</td>
                  <td>{item.INV}</td>
                  <td>{item.rating}</td>
                  <td>{item.quantity}</td>
                  <td>{item.NAV}</td>
                  <td>{item.setCycle}</td>
                  <td>{item.invCurr}</td>
                  <td>{item.profit}</td>
                </tr>)
                
              }
              
              
            </tbody>
          </table>
          </div>
        )
    }
}


export default Table2