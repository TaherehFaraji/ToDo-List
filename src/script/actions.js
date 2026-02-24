const input = document.getElementById("input");
const addbtn = document.getElementById("btn");
const list = document.getElementById("list");

addbtn.addEventListener("click", () => {
    const task = input.value;
    if (task !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
        <p>${task}</p>
        <button type="button" class="btn btn-outline-success Sbtn">Success</button>
        <button type="button" class="btn btn-outline-danger Cbtn">Cancel</button>
        `;
        list.appendChild(li);

        const successBtn = li.querySelector(".Sbtn");
        successBtn.addEventListener("click", (e) => {
            e.target.closest("li").style.color = "green";
        });

        const cancelBtn = li.querySelector(".Cbtn");
        cancelBtn.addEventListener("click", (e) => {
            e.target.closest("li").remove();
        });
        input.value = "";
    }
});