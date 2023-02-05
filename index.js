// Add your code here
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const newId = data.id;
            const element = document.createElement('div');
            element.innerHTML = `New ID: ${newId}`;
            document.body.appendChild(element);
        })
        .catch(function(error) {
            const element = document.createElement('div');
            element.innerHTML = `Error: ${error.message}`;;
            document.body.appendChild(element);
        })
}