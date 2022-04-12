let gridx = 16;
let gridy = 16;


function createrows () {

for (var i = 0; i < gridy; i++){
    console.log(gridy);
    const overall = document.querySelector("#overall")
    const rows = document.createElement('row')
    rows.classList.add(i)
    rows.textContent = i
    rows.style.border = "solid 2px"
    



    overall.appendChild(rows)

}
}

function createItems () {

}

createrows();
