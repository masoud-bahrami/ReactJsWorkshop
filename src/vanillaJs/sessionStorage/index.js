const REPOSITORY = (() => {
    const UpSert = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    const Delete = (key) => {
        sessionStorage.removeItem(key);
    }
    const GetAll = () => {
        return Object.values({...sessionStorage });
    }
    const Get = (id) => {
        const artists = GetAll();

        for (let i = 0; i < artists.length; i++) {

            if (id == JSON.parse(artists[i]).id) {
                return JSON.parse(artists[i]);
            }
        }
    }
    return {
        UpSert,
        Delete,
        GetAll,
        Get
    }
})();

function Artist(firstName, lastName, age) {
    return {
        id: new Date().getTime(),
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function addNewArtistHandler() {
    var firstName = getValueOf("firstName")();
    var lastName = getValueOf("lastName")();
    var age = getValueOf("age")();

    var aNewArtist = new Artist(firstName, lastName, age);

    REPOSITORY.UpSert(aNewArtist.id, aNewArtist);
    redirectTo("./index.html");
}

function updateAnExistingArtistHandler() {
    var firstName = getValueOf("firstName")();
    var lastName = getValueOf("lastName")();
    var age = getValueOf("age")();
    var theArtist = new Artist(firstName, lastName, age);
    //get query parameters
    const urlSearchParams = new URLSearchParams(location.search);
    const ID = urlSearchParams.get("id");

    REPOSITORY.UpSert(ID, theArtist);
    redirectTo("./index.html");
}

function goToAddNewArtistPageHandler() {
    redirectTo('./create.html');
}

function removeAnArtistHandler(id) {
    REPOSITORY.Delete(id);
    redirectTo("./index.html");
}

function goToUpdateArtistPageHandler(id) {
    redirectTo(`./update.html?id=${id}`);
}

function fillArtistTable() {
    const artists = REPOSITORY.GetAll();

    let index = 1;
    artists.forEach(artist => {
        const aNewArtis = JSON.parse(artist);
        const ARTIST_TABLE = getDOMElementById("artistTable");

        let aNewRow = ARTIST_TABLE.insertRow(index);
        aNewRow.insertCell(0).innerHTML = aNewArtis.firstName;
        aNewRow.insertCell(1).innerHTML = aNewArtis.lastName;
        aNewRow.insertCell(2).innerHTML = aNewArtis.age;
        aNewRow.insertCell(3).innerHTML = `<button type="button" class="btn btn-primary" onclick="goToUpdateArtistPageHandler(${aNewArtis.id})">Update</button> <button type="button" class="btn btn-danger" onclick="removeAnArtistHandler(${aNewArtis.id})">Delete</button>`;
        index++;
    });
}



function updatePageLoadedHandler() {
    const urlSearchParams = new URLSearchParams(location.search);
    const ID = urlSearchParams.get("id");
    const artist = REPOSITORY.Get(ID);
    if (artist == undefined) {
        redirectTo("./index.html");
    }
    getDOMElementById("firstName").value = artist.firstName;
    getDOMElementById("lastName").value = artist.lastName;
    getDOMElementById("age").value = artist.age;
}

document.addEventListener('DOMContentLoaded', () => {
    if (location.href.includes("index"))
        fillArtistTable();

    if (location.href.includes("update")) {
        updatePageLoadedHandler();
    }
}, false);

function getValueOf(elementId) {
    const element = getDOMElementById(elementId);
    return () => valueOf(element);
}

function valueOf(element) {
    return element.value;
}

function getDOMElementById(elementId) {
    return document.getElementById(elementId);
}

function redirectTo(url) {
    window.location.href = url;
}