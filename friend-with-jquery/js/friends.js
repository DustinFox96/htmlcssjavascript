let friends = [];

$().ready(() => {

    $("#add").click(() => {
        let fname = $("#iname").val();
        let femail = $("#iemail").val();
        let fphone= $("#iphone").val();
        let friend = {
            name: fname, email: femail, phone: fphone
        };
        friends.push(friend);
        display();
    });

});


const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let friend of friends) {
        let tr = $("<tr></tr>")
        let tbname = $(`<tb>${friend.name}</td>`)
        tr.append(tbname);
        let tbemail = $(`<tb>${friend.email}</td>`)
        tr.append(tbemail);
        let tbphone = $(`<tb>${friend.phone}</td>`)
        tr.append(tbphone);
        tbody.append(tr);
    }
}



