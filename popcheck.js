const imageHolder = document.getElementById("image-holder");
const populationHolder = document.getElementById("population-holder");
const searchArea = document.getElementById("search-area");
const searchButton = document.getElementById("button");

async function getPopulation(country) {
  const url = `https://api.api-ninjas.com/v1/population?country=${country}`;
  const headers = { "X-Api-Key": "QuF0Jpapaz4oaNjFIH2DnxHWN4Gs96MpNPNAOAgN" };
  const Response = await fetch(url, { headers: headers });

  if (!Response.ok) {
    throw new Error(`HTTP error: ${Response.status}`);
  }

  const data = await Response.json();

  return data["historical_population"][0]["population"];
}

async function getFlag(country) {
  const Country = country.slice(0, 2).toLowerCase();
  const url = `https://api.api-ninjas.com/v1/countryflag?country=${Country}`;
  const headers = { "X-Api-Key": "QuF0Jpapaz4oaNjFIH2DnxHWN4Gs96MpNPNAOAgN" };
  const Response = await fetch(url, { headers: headers });

  if (!Response.ok) {
    console.log("Country Flag not available");
    throw new Error(`HTTP error: ${Response.status}`);
  }

  const data = await Response.json();

  return data["rectangle_image_url"];
}

function addCommas(num) {
  num = num.toString();
  let newString = "";
  let count = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    newString = num[i] + newString;
    count++;

    if (count % 3 === 0 && i !== 0) {
      newString = "," + newString;
    }
  }

  console.log("formatted string is", newString);
  return newString;
}

searchButton.addEventListener("click", async () => {
  const country = searchArea.value;
  if (country.trim() === "") {
    return;
  } else {
    imageHolder.innerHTML = "";
    populationHolder.textContent = "";
    const result = await getPopulation(country);

    const newResult = addCommas(result);

    const div = document.createElement("div");
    const image = document.createElement("img");

    image.src = await getFlag(country);

    console.log("image link is", image.src);

    div.style.width = "600px";
    div.style.height = "380px";

    // div.style.borderRadius = "30px";
    div.style.position = "relative";
    // div.style.backgroundColor = "red";
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";
    image.style.borderRadius = "30px";
    image.style.position = "relative";

    populationHolder.textContent = newResult;
    div.appendChild(image);
    imageHolder.appendChild(div);

    searchArea.value = "";
  }
});
