const renderItems = (data) => {
  data.forEach(element => {
    console.log(element);
  });
}

fetch('https://test-5c01c-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  })
  