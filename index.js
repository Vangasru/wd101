let userForm = document.getElementById("user-form");

const retrieveEntries = () => {
    let entries = localStorage.getItem("user-entries");
    if(entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
        const NameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const EmailCell = `<td class='border px-4 py-2'>${entry.email}</td>`; 
        const PasswordCell = `<td class='border px-4 py-2'>${entry.password}</td>`
        const DobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const AcceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptedTermsAndconditions}</td>`;

        const row  = `<tr>${NameCell} ${EmailCell} ${PasswordCell} ${DobCell} ${AcceptTermsCell}</tr>`;
        return row;

    }).join("\n");

    const table = `<table class="table-auto w-full"><tr>

    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted terms?</th>
</tr>${tableEntries} </table>`;

let details = document.getElementById("user-entries");
details.innerHTML = table;

}
const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndconditions = document.getElementById("acceptTerms").checked;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndconditions
    }
    userEntries.push(entry);
    
    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayEntries();

}
userForm.addEventListener("submit", saveUserForm);
displayEntries();
