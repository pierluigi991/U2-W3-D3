const URL = "https://striveschool-api.herokuapp.com/books";
fetch(URL)
  .then((responseObj) => responseObj.json())
  .then((books) => {
    // DOM MANIPULATION

    const grid = document.getElementById("books-container");
    grid.innerHTML = "";

    books.forEach((book) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card" style="width: 15rem;">
           <img src="${book.img}" class="card-img-top" alt="book">
            <div class="card-body">
         <h5 class="card-title">${book.title}</h5>
         <p class="card-text fw-bold">${book.price}</p>
         <p class="card-text fw-semibold">${book.category}</p>
         <a href="#" id="del-button" class="btn btn-primary">Scarta</a>
         <a href="#" id="car-button" class="btn btn-primary">Aggiungi</a>
         <a href="#" id="rem-button" class="btn btn-primary">rimuovi</a>
            </div>
        </div> `;
      const scarta = col.querySelector("#del-button");
      scarta.onclick = () => {
        col.remove();
      };

      const btnCar = col.querySelector("#car-button");
      btnCar.onclick = () => {
        const carrello = document.querySelector("#cart");
        carrello.appendChild(col);
      };

      grid.appendChild(col);
    });
  })

  .catch((error) => console.log("CATCH", error));
