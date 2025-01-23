document.getElementById("btn1").addEventListener("click", dataInsert);
async function dataInsert() {
  let rno = document.getElementById("nm").value;
  let nm = document.getElementById("no").value;
  let city = document.getElementById("em").value;
  let ro = document.getElementById("ro").value;
  let int = document.getElementById("int").value;
  let out = document.getElementById("out").value;
  let api = "http://localhost:3000/customer";

  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set content type to JSON
    },
    body: JSON.stringify({
      
      "name": rno,
      "mobileNo": nm,
      "Email": city,
      "Room": ro,
      "checkIn": int,
      "checkOut":out

    }),
  });
  alert("Data save!!!");
}
