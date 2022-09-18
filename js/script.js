// let dataSet;
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    // dataSet = data;
    displayData(data);
  });

function displayData(data) {
  const cardContainer = document.getElementById("homepage-content");
  data.forEach((element) => {
    // console.log(element);
    const { id, img, name, price } = element;
    const divContainer = document.createElement("div");
    divContainer.classList.add("card", "bg-base-100", "shadow-2xl", "p-3");
    divContainer.innerHTML = `
            <figure>
              <img src="${img}" class="rounded-lg w-1/2" alt="${name}" />
            </figure>
          </div>
            <div class="card-body">
            <div id="parent-name-icon-container" class="flex justify-between">
              <h2 class="card-title">${name}</h2>
            <div>
                <span><i class="fa-solid fa-heart text-slate-600 mr-2"></i></span>
                <span><i class="fa-regular fa-square-minus text-purple-500"></i></span>
            </div>
            </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h3>${price}</h3>
            <div class="flex justify-between">
              <label onclick="handleModal('${id}')" for="my-modal-3" class="btn btn-primary btn-outline w-[46%]"><i
                  class="fa-solid fa-circle-info mr-2"></i>
                Details</label>
              <!-- <button onclick ="handleBuyNow("${id}")" class="btn btn-primary btn-outline w-[46%]"></button> -->
              <button class="btn btn-secondary btn-outline w-[46%]"><i class="fa-solid fa-bag-shopping mr-2"></i>Buy
                Now</button>
      
      `;
    cardContainer.appendChild(divContainer);
  });
}

// function handleModal(id) {
//     const product = dataSet.find((item) => item.id === id)
//     const { id, name, img, price } = product
//     const modalContainer = document.getElementById('') 
// }

