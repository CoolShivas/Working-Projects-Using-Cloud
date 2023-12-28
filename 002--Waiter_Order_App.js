/*// Watch this videos for project details 


// Link -->          https://www.youtube.com/watch?v=Dl3Z4gl413Y



// Solution-->*/




const headerAccess = document.querySelector('header');
// console.log(headerAccess);
headerAccess.style.color = 'orange';
headerAccess.style.borderBottom = 'solid 5px #f4f4f4'

//////////////////////////////////////////////////////////////////////////////////////////////////


const formAccess = document.getElementById("forming")
// console.log(formAccess);
formAccess.parentElement.style.color = 'yellow'


//////////////////////////////////////////////////////////////////////////////////////////////////


const orderAccess = document.querySelector("#ord");
// console.log(orderAccess);
orderAccess.style.borderBottom = 'solid 5px #000';


//////////////////////////////////////////////////////////////////////////////////////////////////



const tbl01Access = document.querySelector("#table10");
// console.log(orderAccess);
tbl01Access.style.borderBottom = 'solid 2px #000';


//////////////////////////////////////////////////////////////////////////////////////////////////


const tbl02Access = document.querySelector("#table20");
// console.log(orderAccess);
tbl02Access.style.borderBottom = 'solid 2px #000';


//////////////////////////////////////////////////////////////////////////////////////////////////

const tbl03Access = document.querySelector("#table30");
// console.log(orderAccess);
tbl03Access.style.borderBottom = 'solid 2px #000';


//////////////////////////////////////////////////////////////////////////////////////////////////

const tbl04Access = document.querySelector("#table40");
// console.log(orderAccess);
tbl04Access.style.borderBottom = 'solid 2px #000';


//////////////////////////////////////////////////////////////////////////////////////////////////


function storingOrderToLocalStorage(event){
    event.preventDefault();
    // console.log(1008);

    const orderObj = {
        chPriceInput : event.target.chosePrc.value,
        chDishInput : event.target.choseDis.value,
        chTableInput : event.target.opt.value
    }
    // localStorage.setItem(orderObj.chDishInput , JSON.stringify(orderObj));
    // showingOrderOnDisplay(orderObj);
    axios.post("https://crudcrud.com/api/5988246b20b940d0a8cd245d413b8471/waiterOrder" , orderObj)
    .then((response) => {
        console.log(response);
        showingOrderOnDisplay(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    

}
///////******************************************************************************************************* */


// function showingOrderOnDisplay(orderObj){
//     const tableId = orderObj.chTableInput.replace("Table = " , '');
//     const parentUlTag = document.getElementById(`tbl${tableId}`);
//     const childLiTag = document.createElement('li');
//     childLiTag.className = 'adding-table-no';
//     const childLiTagText = document.createTextNode(`${orderObj.chPriceInput} - ${orderObj.chDishInput} - ${orderObj.chTableInput}`);

//     childLiTag.apppendChild(childLiTagText);

//     parentUlTag.appendChild(childLiTag);
// }

// // This is not working espically the childLiTagText;

///////******************************************************************************************************* */


window.addEventListener('DOMContentLoaded' , () => {
    axios.get("https://crudcrud.com/api/5988246b20b940d0a8cd245d413b8471/waiterOrder")
    .then((res) => {
        console.log(res);
        for(let i = 0; i < res.data.length; i++)
        {
            showingOrderOnDisplay(res.data[i]);
        }
    })
    .catch((err) => {
        console.log(err);
    })
})



///////******************************************************************************************************* */

function showingOrderOnDisplay(orderObj) {
    // // Formation of new variable to hold the id's of all table :-
    const tableId = orderObj.chTableInput.replace("Table = ", ""); 
    // Get table number also , remember that
    // //  we have taken the <option > Table = 01 </option> i.e,("Table = ", "")  for rest of the tables ;


    // // Targetting the correct table number by grabbing its correct id's :-
    const parentUlTag = document.getElementById(`tbl${tableId}`); // Target correct list;

    // // Creating the li tag to hold all the details such as price and dish names :-
    const childLiTag = document.createElement('li');
    childLiTag.className = "adding-tables";

    // // Creation of innerHTML by which it will display the details on the screen :-
    // childLiTag.innerHTML = `${orderObj.chPriceInput} - ${orderObj.chDishInput} <button class="delete-button">Delete</button>`; // Add price and delete button
    childLiTag.innerHTML = `${orderObj._id} - ${orderObj.chPriceInput} - ${orderObj.chDishInput} `; // Add price and delete button
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // // Formation of delete button to delete the order or anything from the display as well as from the local storage :-
    const delBtn = document.createElement('button');
    delBtn.value = 'delete';
    delBtn.className = 'btn btn-danger';
    delBtn.appendChild(document.createTextNode('DELETE'));

    // // Creation of delete functionality from storage and screen too :-
    delBtn.onclick = () => {
        // localStorage.removeItem(orderObj.chPriceInput);
        axios.delete(`https://crudcrud.com/api/5988246b20b940d0a8cd245d413b8471/waiterOrder/${orderObj._id}`)
        .then((arr) => {
            console.log(arr);
            for(let i = 0; i < arr.data.length; i++)
            {
                showingOrderOnDisplay(arr.data[i]);
            }
        })
        .catch((brr) => {
            console.log(brr);
        })
        parentUlTag.removeChild(childLiTag);
    }

    // // Pushing the delete button inside the li tag :-
    childLiTag.appendChild(delBtn);
   
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // // Formation of edit button to edit the order or anything from the display as well as from the local storage :-
    const editBtn = document.createElement('button');
    editBtn.value = 'edit';
    editBtn.className = 'btn btn-secondary';
    editBtn.appendChild(document.createTextNode('EDIT'));

    // // Creation of edit functionality from storage and screen too :-
    editBtn.onclick = () => {
        // localStorage.removeItem(orderObj.chPriceInput);
        axios.delete(`https://crudcrud.com/api/5988246b20b940d0a8cd245d413b8471/waiterOrder/${orderObj._id}`)
        .then((crr) => {
            console.log(crr);
            for(let i = 0; i < crr.data.length; i++)
            {
                showingOrderOnDisplay(crr.data[i]);
            }
        })
        .catch((drr) => {
            console.log(drr);
        })
        parentUlTag.removeChild(childLiTag);
        document.getElementById("chP").value = orderObj.chPriceInput;
        document.getElementById("chD").value = orderObj.chDishInput;
    }

    // // Pushing the edit button inside the li tag :-
    childLiTag.appendChild(editBtn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // // Pushing the li tag inside the ul tag :-
    parentUlTag.appendChild(childLiTag);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Clear the details once it will stored and again blank for new data :-
    document.getElementById("chP").value = '';
    document.getElementById("chD").value = '';
    
  }



// ///////******************************************************************************************************* */