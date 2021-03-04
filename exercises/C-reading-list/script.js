function readingList(books) {
  // Write your code here...

  var content = document.querySelector('#content')
  for (let i=0; i<books.length; i++){
    var ul = document.createElement('ul');
    ul.style.display = "flex"
    ul.style.alignItems = "center"
    ul.style.justifyContent = "center"
    ul.style.padding = "10px"
    let li = document.createElement('li');
    li.style.listStyle = "none"
    if (books[i].alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
    var p = document.createElement('p');
    var img = document.createElement('img');
    p.innerHTML = `${books[i].title} by ${books[i].author}`
    p.style.textAlign = "center"
    p.style.fontWeight = "bolder";
    content.style.display = "flex"
    img.src = books[i].img
    img.style.marginTop = "20px"
    img.style.height = "40%"
    img.style.marginLeft = "10px"
    content.appendChild(ul).appendChild(li).appendChild(p).appendChild(img);
  }
}


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);