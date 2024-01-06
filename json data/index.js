const data = fetch("./example.json")
.then((re) => re.json())
.then((re) => (re.students));
console.log(data);