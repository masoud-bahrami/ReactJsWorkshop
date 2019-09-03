function Artist(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function onEdit(name) {
    alert(name);
}

function onSubmit() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var artist = new Artist(firstName, lastName, age);

    localStorage.setItem(new Date().getTime(), JSON.stringify(artist));

    var items = Object.values({...localStorage });
    console.warn(items);
    document.getElementById("showAll").innerHTML = "";
    items.forEach(element => {
        document.getElementById("showAll").innerHTML +=
            `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${JSON.parse(element).firstName}</div>
    <div class="card-body">
    <button type="button" class="btn " onclick="onEdit('${JSON.parse(element).firstName}')">Show</button>
        <h5 class="card-title">${JSON.parse(element).firstName}</h5>
    </div>
</div>
    `;
    });
}

//get query parameters
//new URLSearchParams(location.search).get("a")