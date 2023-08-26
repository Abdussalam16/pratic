let formbtn = document.getElementById('formbtn');
formbtn.addEventListener('click', () => {
    let form = document.createElement("form");
    form.innerHTML = '<input class="inputs marign" type="text" name="name" placeholder="Name"><input class="inputs" type="Last Name" name="lastName" placeholder="Last Name"><input class="inputs" type="text" name="email" placeholder="Email"><input class="inputs" type="password" name="password" placeholder="Password"><input class="inputs" type="number" name="number" placeholder="Number">';
    var forms = document.getElementById("forms");
    forms.appendChild(form);
})

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    var forms = document.querySelectorAll("form"); // get all values from input
    // console.log(forms);
    let table = document.getElementById("table");
    let tbody = table.getElementsByTagName("tbody")[0];
    // console.log(tbody);

    for (let i = 0; i < forms.length; i++) {
        form = forms[i];
        let name = form.querySelector("[name=name]").value;
        console.log(name);
        let lastName = form.querySelector("[name=lastName]").value;
        console.log(lastName);
        let email = form.querySelector("[name=email]").value;
        console.log(email);
        let password = form.querySelector("[name=password]").value;
        console.log(password);
        let number = form.querySelector("[name=number]").value;
        console.log(number);
        let tr = document.createElement("tr"); // table data
        tr.innerHTML = "<td>" + name + " </td>" + "<td> " + lastName + "</td>" + "<td> " + email + "</td>" + "<td>" + password + "</td>" + "<td>" + number + "</td>";
        //  console.log(tr);
        tbody.appendChild(tr);
    }

    table.style.display = "block";
})