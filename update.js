function dataUpdate(id) {
 let rno = document.getElementById("nm").value;
 let nm = document.getElementById("no").value;
 let city = document.getElementById("em").value;
 let ro = document.getElementById("ro").value;
 let int = document.getElementById("int").value;
 let out = document.getElementById("out").value;


 let api = `http://localhost:3000/customer/${id}`;

//   let api = `http://localhost:3000/students/${id}`;
  fetch(api, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      "name": rno,
      "mobileNo": nm,
      "Email": city,
      "Room": ro,
      "checkIn": int,
      "checkOut": out
    }),
  }).then((res) => {
    alert("data updated!!!");
  });
}

function myDel(id) {
let api = `http://localhost:3000/customer/${id}`;
  fetch(api, { method: "DELETE" }).then((res) => {
    alert("Record Deleted!!!");
  });
}

async function myEdit(id) {
  let api = `http://localhost:3000/customer/${id}`;

  const Obj = await fetch(api);
  //console.log(Obj);
  const MyData = await Obj.json();
  // console.log(MyData);

  document.getElementById("customer").innerHTML = `
       Edit Rollno <input type="text" value="${MyData.name}" id="rno" >
       <br >
        Edit Name<input type="text" value="${MyData.mobileNo}" id="nm" >
       <br >
        Edit City <input type="text" value="${MyData.Email}" id="ct" >
       <br >
        Edit Fees <input type="text" value="${MyData.Room}" id="fs" >
       <br >
        Edit Fees <input type="text" value="${MyData.checkIn}" id="fs" >
       <br >
        Edit Fees <input type="text" value="${MyData.checkOut}" id="fs" >
       <br >
       <button onclick="dataUpdate(${MyData.id})"> Data update</button>

   
   
   `;
}

async function dataShow() {
  let api = `http://localhost:3000/customer`;

  const Obj = await fetch(api);
  console.log(Obj);
  const Data = await Obj.json();
  console.log(Data);

  let Table = `<table id="tab">
                <tr bgcolor="orange">
                  <td> name </td>
                   <td> mobileNo </td>
                   <td>Email</td>
                   <td> Room </td> 
                   <td>checkIn</td>
                   <td>checkOut</td>
                   </tr> `;

  Data.map((key) => {
    Table += `<tr>
                        <td> ${key.name} </td>
                          <td> ${key.mobileNo} </td>
                            <td> ${key.Email} </td>
                              <td> ${key.Room} </td>
                              <td> ${key.checkIn} </td>
                              <td> ${key.checkOut} </td>
                              <td> 
                               
                                 <a href="#" onclick="myDel(${key.id})">
                                   <img src="del.png" width="30" height="30" >
                                  </a>

                                  <a href="login.html" onclick="myEdit(${key.id})">
                                  <img src="edit.png" width="30" height="30" >
                                </a>
                              
                              </td>
                       </tr>`;
  });

  Table += "</table>";
  document.getElementById("customer").innerHTML = Table;
}

dataShow();
