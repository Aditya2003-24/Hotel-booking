async function dataShow() {
  let api = "http://localhost:3000/customer";
  let Table = `<table id="tab"  >
    <tr><th>Name</th>
    <th>Mobileno.</th>
    <th>Email</th>
    <th>Room</th>
    <th>CheckIn</th>
    <th>CheckOut</th>
    </tr>`;

  const myObj = await fetch(api);
  //console.log(myObj);
  const Data = await myObj.json();
  console.log(Data);
  Data.map((item) => {
    Table += `<tr>
                         <td> ${item.name} </td>
                         <td> ${item.mobileNo} </td>
                         <td> ${item.Email} </td>
                         <td> ${item.Room} </td>
                         <td> ${item.checkIn} </td>
                         <td> ${item.checkOut} </td>
                       </tr> `;
  });
  Table += "</table>";
  document.getElementById("customer").innerHTML = Table;

  
}
dataShow();
