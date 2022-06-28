// Add your code here
const submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ name, email }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.id);
            document.body.innerHTML = data.id;
        })
        .catch((error) => {
            console.log(error.message);
            document.body.innerHTML = error.message;
        });
};