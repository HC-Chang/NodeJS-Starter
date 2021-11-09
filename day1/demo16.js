// object

var user = {
    name: "Mark",
    location: "Taipei",
    role: "R&D"
}
var empty = {}

console.log(user, empty)

empty["name"] = "James"
empty['location'] = "Hsinchu"
empty['role'] = 'FAE'

console.log(empty)
console.log(empty.name, empty.location, empty.role)

delete empty.name
console.log(empty)
console.log(empty.name)
console.log(Object.keys(empty))
console.log(Object.keys(empty).length)