const URL = "http://jsonplaceholder.typicode.com/users"

fetch(URL)
  .then(response => {
    return response.json()
  }).then(data => {
    console.log(data.map(user => user.name))
  })