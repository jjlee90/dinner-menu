let meats = [
    "pork",
    "beef",
    "chicken",
    "lamb",
    "turkey",
    "fish"
]

let vegetables = [
    "cilantro",
    "shanghai",
    "beets",
    "eggplant"
]

let desserts = [
    "flan",
    "ice cream",
    "rice pudding",
    "cake",
    "mochi"
]

meats.pop("fish")
console.log(meats)

vegetables.pop("eggplant")
console.log(vegetables)

let myfav = "My favorite dessert is" + desserts[2] + "."
console.log(myfav)

let mondaymenu = meats.concat(vegetables, desserts)
console.log(mondaymenu)