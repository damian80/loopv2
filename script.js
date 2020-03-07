// stworz zmienna z numerem
let number = 1;

// pobierz button za pomoca queryselector i przypisz wynik do zmiennej
const btn = document.querySelector("button");
const list = document.querySelector("ul");
// ustaw nasluchiwanie na click i stworz funkcje anonimowa
// stworz obiekt li w funkcji jako zmienna
btn.addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = number;
  //   dodajmy obiekt li

  list.appendChild(li);
  if (number % 3 == 0) {
    li.classList.add("big");
  }
  number += 2;
});
