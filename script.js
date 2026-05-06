let selectedValue = ""
let ratingBtns = document.querySelectorAll(".buttons button")
let submitBtn = document.getElementById("sub-btn")
let ratingSelected = document.getElementById("selected")

ratingBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        selectedValue = this.textContent
    })
})

submitBtn.addEventListener("click", function () {
    if (selectedValue == "") {
        document.getElementById("error").innerHTML = "select a value"
    } else {
        ratingSelected.innerHTML = ` You selected
        ${selectedValue} out of 5`
        document.querySelector(".context").style.display = "none"
        document.querySelector(".buttons").style.display = "none"
        document.querySelector(".thanks").style.display = "flex"
    }

})
