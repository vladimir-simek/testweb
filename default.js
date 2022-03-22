class User {
    fullName;
    wage;

    constructor(fullName, wage) {
        this.fullName = fullName;
        this.wage = wage;
    }
}

window.onload = () => {
    fetch("http://159.223.27.219/d41219a7-eb84-46d3-9fda-da211442eb35/User")
        .then(response => response.json())
        .then(data => {
            david = new User(data.fullName, data.wage)
            console.log(david)
            document.getElementById("inputName").value = david.fullName
            document.getElementById("inputWage").value = david.wage
        });

    fetch("http://159.223.27.219/d41219a7-eb84-46d3-9fda-da211442eb35/User/Work")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //document.getElementById("dataLol").innerHTML= data[0].note;

            for (let i = 0; i < data.length; i++) {
                document.getElementById("dataLol").innerHTML += `<div class="work">
                    <h3 id="workNote">${data[i].note}</h3>
                    <a id="workTime">(Time)</a>
                    <a id="workMoney">Money,-</a>
                    <a id="workWage">Wage: ${data[i].wage}</a>
                    <a id="workId">${data[i].id}</a>
                    <button onClick="deleteWork()"></button>
                </div>`
            }
        });
}

function updateUser() {
    fetch("http://159.223.27.219/d41219a7-eb84-46d3-9fda-da211442eb35/User",  {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: "d41219a7-eb84-46d3-9fda-da211442eb35",
            fullName: document.getElementById("inputName").value,
            wage: document.getElementById("inputWage").value
        })
    })
}

function createWork() {
    fetch("http://159.223.27.219/d41219a7-eb84-46d3-9fda-da211442eb35/User/Work",  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            note: document.getElementById("inputNote").value,
            from: document.getElementById("fromDate").value,
            to: document.getElementById("toDate").value,
            wage: document.getElementById("inputWage").value
        })
    })
}

function deleteWork() {
    s = "http://159.223.27.219/d41219a7-eb84-46d3-9fda-da211442eb35/User/Work/" + document.getElementById("workId").value
    fetch(s,  {
        method: 'DELETE',
    })
}