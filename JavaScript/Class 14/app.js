alert("Saylani Students")

// Find Text
var text = "The IT industry in Pakistan is experiencing rapid growth, contributing significantly to the national economy and demonstrating potential for further expansion. It's a key sector for exports and job creation, with a large and growing pool of young, tech-savvy professionals. "

var user = prompt("Find your word")

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + user.length).toLocaleLowerCase() === user.toLocaleLowerCase()) {
        console.log("Mil Gaya")
    }

}

// Using Indexof for finding

// console.log(text.indexOf("Pakistan"))

if (text.indexOf("Pakistan") !== -1) {
    console.log("Milgaya")
} else {
    console.log("Nhi Mila")
}
