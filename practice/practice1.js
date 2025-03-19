const btn = document.getElementById("btn");
const breedList = document.getElementById("breed-list");
const subBreedList = document.getElementById("sub-breed-list");

// Get breed list when page loads
async function getBreedList() {
  try {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    renderBreed(res.data.message);
  } catch (error) {
    console.error("Error fetching breed list:", error);
  }
}

function renderBreed(breeds) {

  breedList.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a breed";
  breedList.appendChild(defaultOption);

  // Add breed options
  for (let key in breeds) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    breedList.appendChild(option);
  }
}

// Function to get sub-breeds for the selected breed
async function getSubBreeds() {
  const breed = breedList.value;

  if (!breed) {
    alert("Please select a breed first");
    return;
  }

  try {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/list`);
    const subBreeds = res.data.message;

    // Clear previous sub-breeds
    subBreedList.innerHTML = "";

    if (subBreeds.length === 0) {
      const listItem = document.createElement("li");
      listItem.textContent = "No sub-breeds";
      subBreedList.appendChild(listItem);
    } else {
      // Display sub-breeds
      subBreeds.forEach((subBreed) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = subBreed;
        link.href = "#";
        link.dataset.subBreed = subBreed;
        link.addEventListener("click", function() {
          getRandomImage(breed, this.dataset.subBreed);
        });
        listItem.appendChild(link);
        subBreedList.appendChild(listItem);
      });
    }
  } catch (error) {
    console.error("Error fetching sub-breeds:", error);
    alert("Failed to fetch sub-breeds");
  }
}

async function getRandomImage(breed, subBreed) {
  const image = document.getElementById("image");
  
  if (!breed || !subBreed) {
    alert("Both breed and sub-breed are required");
    return;
  }
  
  try {
    // Get all images for this breed/sub-breed
    const url = `https://dog.ceo/api/breed/${breed}/${subBreed}/images`;
    const response = await axios.get(url);
    
    // Get the first image from the array
    if (response.data.message.length > 0) {
      image.src = response.data.message[0];
      image.style.width = "300px";
      image.style.height = "400px";
    } else {
      alert("No images found for this sub-breed");
    }
  } catch (error) {
    console.error("Error fetching dog image:", error);
    alert("Failed to fetch dog image");
  }
}

// Add event listener to button
btn.addEventListener("click", getSubBreeds);

// Initialize the app
getBreedList();
