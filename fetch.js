const url = "https://football98.p.rapidapi.com/bundesliga/transfers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "04b9e190a9msh47d09a5fe559570p1c9d81jsn3fa51f8478e1",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
  },
};

async function getTransfers() {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);

  const transfersDiv = document.getElementById("transfers");

  data.forEach((transfer) => {
    const transferDiv = document.createElement("div");
    const playerEl = document.createElement("h2");
    const teamsEl = document.createElement("h3");
    const priceEl = document.createElement("h3");
    playerEl.textContent = transfer.playerName;
    teamsEl.textContent = transfer.oldClub + " to " + transfer.newClub;
    priceEl.textContent = transfer.price;
    transferDiv.append(playerEl);
    transferDiv.append(teamsEl);
    transferDiv.append(priceEl);
    transfersDiv.append(transferDiv);
  });
}

getTransfers();
console.log("helllo 1");
