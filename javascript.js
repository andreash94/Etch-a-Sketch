let rowsandcolumns = 16;
let widthheight = 960/rowsandcolumns


function createrows () {

for (var i = 0; i < rowsandcolumns; i++){
    const overall = document.querySelector("#overall")
    const rows = document.createElement('row')
    rows.classList.add(i)
    rows.style.display = "flex"
    rows.style.height = (widthheight + 'px')
    //rows.style.border = "solid 2px"
    overall.appendChild(rows)}}

createrows();

function createitems () {
    for (z = 0; z<rowsandcolumns; z++) {
        var targetrow = document.getElementsByTagName("row").item(z)


        for (x = 0; x<rowsandcolumns; x++){
        const items = document.createElement('item')
        items.classList.add(x)
        items.style.border = "solid 2px"
        items.textContent = x
        items.style.flexGrow = '100'
        
       


        
    
        targetrow.appendChild(items)
    
        }



    }
}
createitems();
