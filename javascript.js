
//variable declaration
let rowsandcolumns = 16;
let widthheight = 960/rowsandcolumns
let color = "black"

//This function creates 16 rows within the over DIV from the HTML file
function createrows () {

for (var i = 0; i < rowsandcolumns; i++){
    const overall = document.querySelector("#overall")
    const rows = document.createElement('row')
    rows.classList.add(i)
    rows.style.display = "flex"
    rows.style.height = (widthheight + 'px')
    //rows.style.border = "solid 2px"
    overall.appendChild(rows)}}


//this actually runs the createrows function to display them before making the btn 
createrows();

//this function creates the btn within each of the 16 rows created
function createitems () {
    for (z = 0; z<rowsandcolumns; z++) {
        var targetrow = document.getElementsByTagName("row").item(z)


        for (x = 0; x<rowsandcolumns; x++){
        const btn = document.createElement('button')
        btn.classList.add(x)
        btn.style.border = "solid 1px"
        //btn.textContent = x
        btn.style.backgroundColor = 'white'
        btn.style.flexGrow = '100'
        btn.addEventListener('mouseover', function (e) {
            if (e.buttons == 1){
            btn.style.backgroundColor = color}
        })
        btn.addEventListener('mousedown', function (e){
            btn.style.backgroundColor = color
        })
    
        targetrow.appendChild(btn)
    
        }



    }}

//this runs the create btn function to get them onto the page
createitems();
const reset = document.querySelector('#reset')
reset.addEventListener('click', ()=> {
    location.reload()
})
