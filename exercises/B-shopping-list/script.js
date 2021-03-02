function shoppingList(arrayOfPeople) {
  // Write your code here...

  const shoppingItems = document.getElementById("content");
  console.log(shoppingItems);

  let ul = document.createElement("ul");

  shopping.forEach((element) => {
    console.log(element);

    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);

    shoppingItems.appendChild(ul);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
