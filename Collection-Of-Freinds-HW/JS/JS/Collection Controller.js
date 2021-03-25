let friends = [];

const addFriend = () => {
    let fname = document.getElementById("newName").value;
    let femail = document.getElementById("newEmail").value;
    let fphone = document.getElementById("newPhone").value;
    let friend = {
        name: fname, email: femail, phone: fphone 
    }
    friends.push(friend);
   display();
}

const display = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let friend of friends) {

        let tr = "<tr>";
        tr += `<td>${friend.name}</td>`;
        tr += `<td>${friend.email}</td>`;
        tr += `<td>${friend.phone}</td>`;
        tr += "</tr>"
        tbody.innerHTML += tr;
    }
}

