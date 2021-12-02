window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((resp) => {
      console.log("RESPONSE OBJ", resp);
      return resp.json();
    })
    .then((books) => {
      console.log(books);

      const row = document.querySelector(".row");

      for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const col = document.createElement("div");
        col.className = "col-3";

        col.innerHTML = `
             <div class="card bg-transparent h-100 mt-5">
              <img src=${book.img} class="card-img-top " alt="...">
              <div class="card-body ">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.price}</p>
               
             <button type="button" class="btn ">
           add to cart
           </button>
<button class="btn " onclick='hide(event)'> skip</button>
              </div>
              </div>
              
             `;
        row.appendChild(col);
      }
    })
    .catch((e) => console.log(e));
};

const hide = (x) => x.target.closest(".card").remove();


