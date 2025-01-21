document.getElementById("btn").addEventListener("click", mySearch);
async function mySearch() {
//   let rollno = document.getElementById("rno").value;
  let api = `http://localhost:3000/Hotel/?hotelid=bhopal`;
  const myObj = await fetch(api);
  const Data = await myObj.json();
  let TAB = `<table id="tab" >
              <tr>
                <th> name </th>
                <th> city </th>
                <th> star </th>
                <th> Address</th>
                <th> price</th>
              </tr>  
             `;
  Data.map((key) => {
    TAB += `
                 <tr>
                 <td>${key.name}</td>
                 <td>${key.city}</td>
                 <td>${key.star}</td>
                 <td>${key.Address}</td>
                 <td>${key.price}</td>
                </tr> 
              `;
  });
  TAB += "</table>";
  document.getElementById("demo").innerHTML = TAB;
}


