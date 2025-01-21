document.getElementById("bot").addEventListener("click", mySearch);
 let vds = document.getElementById("inp").value;

async function mySearch() {
 vds = document.getElementById("inp").value;
  let api = `http://localhost:3000/Hotel/?hotelid=${vds}`;
  const myObj = await fetch(api);
  const Data = await myObj.json();
  let TAB = `<table id="tab"  >
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
  document.getElementById("disply").innerHTML = TAB;
}

