// /*// Watch this videos for project details 
 


// // Link -->          https://www.youtube.com/watch?v=1dSO9dl5SPo



///////*************************************************************************************************************** */



// // For parctice take a help of youtube video


// // Link -->         https://www.youtube.com/watch?v=MKD0Vsu0Ikw



// // Link -->      https://www.youtube.com/watch?v=-gAXxwC76PQ&list=PLejKBGxF74J4ZxGhA53u-7Y1CSgGQcvAI



// // Solution-->*/


///////*************************************************************************************************************** */


// const containerAccess = document.getElementsByTagName("container");
// console.log(containerAccess)

const containerAccess = document.querySelector("#contain");
// console.log(containerAccess)
// // Successfully working;
containerAccess.parentElement.style.color = 'voilet';
containerAccess.style.fontWeight = 'bold';
containerAccess.style.backgroundColor = 'orange';

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cardBodyAccess = document.querySelector('#crd');
// console.log(cardBodyAccess);
// // Successfully working;
cardBodyAccess.style.backgroundColor = 'yellow';

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const productListAccess = document.querySelector("#proList")    ;
// // console.log(productListAccess);
// productListAccess.style.borderBottom = 'solid 3px #000'

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const addProBtn = document.getElementById('addProBtn');
// console.log(addProBtn);

let totalAmount = 0;  // Globally initializing total amount ;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////*************************************************************************************************************** */

// // Formation of functionality from Add product button :- 

addProBtn.addEventListener('click', storingToServer);

// // Formation of function to store on server :-

function storingToServer(event){
    event.preventDefault();
    // console.log(1008);
    // // Successfully working;
    const sellingPriceInput = document.getElementById('sp').value;
    const productNameInput = document.getElementById('pn').value;
    const sellerObj = {
        // sellingPriceInput : event.target.sellprice.value,
        // productNameInput : event.target.productName.value
        sellingPriceInput,
        productNameInput
    }
    // localStorage.setItem(sellerObj.sellingPriceInput , JSON.stringify(sellerObj));
    // showingProductDetailsOnScreen(sellerObj);
    // calculateTotalAmount(); // Update total amount after adding a product


    axios.post("https://crudcrud.com/api/1d821d1d90ac46e587d02d5c2b852324/shivajiBhai" , sellerObj)
    .then((response) => {
        console.log(response);
        showingProductDetailsOnScreen(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
}


///////*************************************************************************************************************** */


window.addEventListener('DOMContentLoaded' , () => {
    axios.get("https://crudcrud.com/api/1d821d1d90ac46e587d02d5c2b852324/shivajiBhai")
    .then((res) => {
        console.log(res);
        for(let i = 0; i < res.data.length; i++)
        {
            showingProductDetailsOnScreen(res.data[i]);   
        }
    })
    .catch((err) => {
        console.log(err);
    })
})


///////*************************************************************************************************************** */




function showingProductDetailsOnScreen(sellerObj){
    const parentUlTag = document.getElementById('highLightPro');
    // console.log(parentUlTag);
    // // Successfully working;
    const childLiTag = document.createElement('li');
    
    childLiTag.textContent = sellerObj.sellingPriceInput + " - " + sellerObj.productNameInput + "  ";
    totalAmount = totalAmount + Number(sellerObj.sellingPriceInput);
    document.getElementById("accumulatedAmt").innerHTML = totalAmount;
    // childElement.textContent = obj.productSellingPrice + " - " + obj.productName + "    ";
    //         totalSellingPrice += Number(obj.productSellingPrice)
    //         document.getElementById("totalSellingPrice").innerHTML = totalSellingPrice


    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const delBtn = document.createElement('button');
    delBtn.value = 'delete';
    delBtn.className = 'btn btn-danger';
    delBtn.appendChild(document.createTextNode('DELETE'));
    delBtn.onclick = () => {
        // localStorage.removeItem(sellerObj.sellingPriceInput);
        
        axios.delete(`https://crudcrud.com/api/1d821d1d90ac46e587d02d5c2b852324/shivajiBhai/${sellerObj._id}`)
        .then((arr) => {
            console.log(arr);
            for(let i= 0; i < arr.data.length; i++)
            {
                showingProductDetailsOnScreen(arr.data[i]);
                totalAmount = totalAmount - Number(sellerObj.sellingPriceInput);
            }
        })
        .catch((brr) => {
            console.log(brr);
        })
        parentUlTag.removeChild(childLiTag);
    }

    childLiTag.appendChild(delBtn);


    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    const editBtn = document.createElement('button');
    editBtn.value = 'edit';
    editBtn.className = 'btn btn-success';
    editBtn.appendChild(document.createTextNode('EDIT'));
    editBtn.onclick = () => {
        // localStorage.removeItem(sellerObj.sellingPriceInput);
         
        axios.put(`https://crudcrud.com/api/1d821d1d90ac46e587d02d5c2b852324/shivajiBhai/${sellerObj._id}`)
        .then((crr) => {
            console.log(crr);
            for(let i = 0; i < crr.data.length; i++)
            {
                showingProductDetailsOnScreen(crr.data[i]);
                totalAmount = totalAmount - Number(sellerObj.sellingPriceInput);
            }
        })
        .catch((drr) => {
            console.log(drr);
        })
        parentUlTag.removeChild(childLiTag);
        document.getElementById('sp').value = sellerObj.sellingPriceInput;
        document.getElementById('pn').value = sellerObj.productNameInput; 
            
    }

    childLiTag.appendChild(editBtn);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    parentUlTag.appendChild(childLiTag);

    document.getElementById('sp').value = '';
    document.getElementById('pn').value = '';
}



///////*************************************************************************************************************** */



// // function calculateTotalAmount(){
// //     totalAmount = 0; // Resetting the total amount
// //     for(let i = 0 ; i < localStorage.length; i++)
// //     {
// //         const itemsAmtAdd = JSON.parse(localStorage.getItem(localStorage.key(i)));
// //         totalAmount = totalAmount + parseFloat(itemsAmtAdd.sellingPriceInput);
// //     }
// //     const totalAmountUlTag = document.getElementById("accumulatedAmt");
// //     totalAmountUlTag.innerHTML = ''; // Clear previous total
// //     totalAmountUlTag.textContent = totalAmount; // Display updated total

// //   // Calculate total amount on page load (for existing products)
// // }

// // calculateTotalAmount()

