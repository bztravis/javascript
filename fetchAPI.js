const data = fetch('./resource.json')
  .then(data => data.json())

console.log(data)