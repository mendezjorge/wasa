function getMensajeList() {
  fetch("https://dummyjson.com/todos")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export default getMensajeList;
