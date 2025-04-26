document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()

    const name = document.querySelector('input[placeholder="Name"]').value.trim()
    const email = document.querySelector('input[placeholder="Email"]').value.trim()
    const comment = document.getElementById('comment').value.trim()

    if (!name || !email || !comment) {
        alert("All fields (Name, Email, and Comments) must be filled out.")
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.")
        return
    }

    alert("Form submitted successfully!")
    this.submit()
})


// Javascript array implementation
for (let i = 0; i < 50; i++) {
    console.log(arr[i+1]);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function(element) {
    console.log(element);
});
