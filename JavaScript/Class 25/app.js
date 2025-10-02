function fillCity() {
    var zip = document.getElementById("zip");
    var city = document.getElementById("city");

    switch (Number(zip.value)) {
        case 1:
            city.value = "Karachi"
            break
        case 2:
            city.value = "Lahore"
            break
        case 3:
            city.value = "Islamabad"
            break
        default:
            console.log("Koi Value Nhi")
    }
}

var list = document.getElementById("list")
var typing = document.getElementById("typing")

function sendMessage() {

    if (event.keyCode === 13) {
        var elem = event.target;
        list.innerHTML += "<li>" + elem.value + "</li>"
        typing.style.display = 'block'
        if (['hi', 'hey', 'oye'].indexOf(elem.value.toLowerCase()) !== -1) {
            setTimeout(function () {

                list.innerHTML += "<li> Hello </li>"
            }, 2000)
            setTimeout(function () {

                list.innerHTML += "<li> Kaise Hain Aap ? </li>"
                typing.style.display = 'none'
            }, 4000)
        }
        else if (['theek', 'fine', 'fit'].indexOf(elem.value.toLowerCase()) !== -1) {

            setTimeout(function () {

                list.innerHTML += "<li> Me Aapki Kia Madad Kar Sakta hun ? </li>"
                typing.style.display = 'none'
            }, 2000)
        } else {
            setTimeout(function () {

                list.innerHTML += "<li> Smjh nhi aaraha </li>"
                typing.style.display = 'none'
            }, 2000)
        }
        elem.value = ""
    }
}