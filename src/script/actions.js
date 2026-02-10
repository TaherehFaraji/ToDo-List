const input = document.getElementById("input");
const addbtn = document.getElementById("btn");
const list = document.getElementById("list");

addbtn.addEventListener("click", () => {
    const task = input.value;
    if (task !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
        <p>${task}</p>
        <button id="Sbtn" type="button" class="btn btn-outline-success">Success</button>
        <button id="Cbtn" type="button" class="btn btn-outline-danger">Cancel</button>
        `;
        list.appendChild(li);

        const successBtn = document.getElementById("Sbtn");
        successBtn.addEventListener("click", (e) => {
            e.target.closest("li").style.color = "green";
        });

        const cancelBtn = document.getElementById("Cbtn");
        cancelBtn.addEventListener("click", (e) => {
            e.target.closest("li").remove();
        });
        input.value = "";
    }
});