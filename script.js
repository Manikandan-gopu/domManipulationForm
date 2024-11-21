// created H1 Tag and appended on display
const div = document.createElement("div")
div.setAttribute("id","heading")
div.innerText = "WEB DEVELOPER TASK"
document.body.append(div)
// created form Tag and appended on display
const getForm = document.createElement("form")
getForm.setAttribute("id","form-details")
getForm.setAttribute("class","form-class")
document.body.append(getForm)

// created div Tag 

const fnameDiv = document.createElement("div")
fnameDiv.setAttribute("class","form-group")
getForm.appendChild(fnameDiv)

// created label  for Name
const nameLabel = document.createElement("label")

nameLabel.setAttribute("id","Name-label")
nameLabel.setAttribute("for","firstName")
nameLabel.innerHTML ="Name"
fnameDiv.append(nameLabel)
console.log(nameLabel)


// created input feilds for fname and last name
const firstName = document.createElement("input")
firstName.setAttribute("type","text")
firstName.classList.add("form-group","form-control")
firstName.setAttribute("placeholder","firstName")
firstName.setAttribute("required","")
getForm.append(firstName) // doubt

const lastName = document.createElement("input")
lastName.setAttribute("input","text")
lastName.setAttribute("class","form-control")
lastName.setAttribute("class","form-group")
lastName.setAttribute("placeholder","lastName")

getForm.append(lastName)

//container for email div

const emailDiv= document.createElement("div")
emailDiv.setAttribute("class","form-group")
getForm.append(emailDiv)

// Created EMail div
const emailLabel = document.createElement("label")
emailLabel.setAttribute("for","email")

emailLabel.innerHTML = "Email"
emailDiv.append(emailLabel)

const email = document.createElement("input")
email.setAttribute("type","email")
email.classList.add("form-group","form-control")

 email.setAttribute("placeholder","register your email")
 emailDiv.append(email)


 const addressDiv=  document.createElement("div")
 addressDiv.setAttribute("class","form-group")
 getForm.append(addressDiv)

 const addressLabel = document.createElement("label")
 addressLabel.setAttribute("for","address")
 
 addressLabel.innerHTML ="House Address"
 addressDiv.append(addressLabel)

 const addressInput = document.createElement("input")
 addressInput.setAttribute("type","text")
 addressInput.setAttribute("id","address")
 addressInput.classList.add("form-group","form-control")
 addressInput.setAttribute("placeholder","residential address")
 addressDiv.append(addressInput)


 //Pincode

 const pincodeDiv = document.createElement("div")
pincodeDiv.setAttribute("class","form-group")
getForm.append(pincodeDiv)
console.log(pincodeDiv)

const pinocodeLabel = document.createElement("label")
pinocodeLabel.setAttribute("for","pincode")
pinocodeLabel.innerHTML ="Pincode"
pincodeDiv.append(pinocodeLabel)

const pincodeInput = document.createElement("input")
pincodeInput.setAttribute("type","number")
pincodeInput.setAttribute("id","pincode")
pincodeInput.classList.add("form-group","form-control")
pincodeInput.setAttribute("placeholder","pincode")
pincodeDiv.append(pincodeInput)

//Gender
const genderDivLabel = document.createElement("label")
genderDivLabel.setAttribute("for","gender")
genderDivLabel.setAttribute("id","genderDivLabel")
genderDivLabel.innerHTML ="Gender"
getForm.append(genderDivLabel)

const genderDiv = document.createElement("div")
genderDiv.setAttribute("class","form-group")
genderDiv.setAttribute("id","genderDiv")
getForm.append(genderDiv)



const genderDivChild1=  document.createElement("div")
genderDivChild1.setAttribute("id","genderDivChild1")
genderDivChild1.classList.add("form-check","form-check-inline")
genderDiv.append(genderDivChild1)


const genderRadio1 = document.createElement("input")
genderRadio1.setAttribute("type","radio")
genderRadio1.setAttribute("id","inlineRadio1")
genderRadio1.setAttribute ("value","male")
genderRadio1.setAttribute("name","genderRadioOptions")
genderRadio1.classList.add("form-check-input");
genderDivChild1.append(genderRadio1)

const genderLabel1 = document.createElement("label")
genderLabel1.setAttribute("for","inlineRadio1")
genderLabel1.classList.add("form-check-label");
genderLabel1.innerHTML = "Male";
genderDivChild1.append(genderLabel1)


const genderDivChild2 = document.createElement("div")
genderDivChild2.setAttribute("id","genderDivChild2")
genderDivChild2.classList.add("form-check","form-check-inline")
genderDiv.append(genderDivChild2)


const genderRadio2 = document.createElement("input")
genderRadio2.setAttribute("type","radio")
genderRadio2.setAttribute("value","female")
genderRadio2.setAttribute("id","inlineRadio2")
genderRadio2.setAttribute("name","genderRadioOptions")
genderRadio2.classList.add("form-check-input")
genderDivChild2.append(genderRadio2)



const genderLabel2 = document.createElement("label");
genderLabel2.setAttribute("for","inlineRadio2");
genderLabel2.classList.add("form-check-label")
genderLabel2.innerHTML ="Female"
genderDivChild2.append(genderLabel2)


const genderDivChild3 = document.createElement("div")
genderDivChild3.setAttribute("id","genderDivChild3")
genderDivChild3.classList.add("form-check","form-check-inline")
genderDiv.append(genderDivChild3)

const genderRadio3 = document.createElement("input")
genderRadio3.setAttribute("type","radio")
genderRadio3.classList.add("form-check-input")
genderRadio3.setAttribute("value","prefer Not to say")
genderRadio3.setAttribute("id","inlineRadio3")
genderRadio3.setAttribute("name","genderRadioOptions")
genderDivChild3.append(genderRadio3)

const genderLabel3 = document.createElement("label")
genderLabel3.setAttribute("for","inlineRadio3")
genderLabel3.classList.add("form-check-label")
genderLabel3.innerHTML ="Prefer not to say"
genderDivChild3.append(genderLabel3)



//choice of food

const fieldsetLabel = document.createElement("label")
fieldsetLabel.setAttribute("for","group1")
fieldsetLabel.setAttribute("id","fieldsetLabel")
fieldsetLabel.innerHTML = "choice of food you liked the most (must choose atleast 2 items)"
getForm.append(fieldsetLabel)


const fieldset1 =document.createElement("fieldset")
fieldset1.setAttribute("id","group1")
fieldset1.classList.add("class","form-control")
getForm.append(fieldset1)

const foodDiv1 = document.createElement("div");
foodDiv1.setAttribute("id","foodDiv1")
foodDiv1.classList.add("form-check","form-check-inline")
fieldset1.append(foodDiv1)

const groupCheckbox1 = document.createElement("input")
groupCheckbox1.setAttribute("id","inlineCheckbox1")
groupCheckbox1.classList.add("form-check-input");
groupCheckbox1.setAttribute("type","checkbox")
groupCheckbox1.setAttribute("value","dosa")
groupCheckbox1.setAttribute("name","group1")
foodDiv1.append(groupCheckbox1);

const foodlabel1 = document.createElement("label")
foodlabel1.setAttribute("for","inlineCheckbox1")
foodlabel1.innerHTML ="Mutton briyani"
foodDiv1.append(foodlabel1)



const foodDiv2 = document.createElement("div")
foodDiv2.setAttribute("id","foodDiv2")
foodDiv2.classList.add("form-check","form-check-inline")
fieldset1.append(foodDiv2)

const groupCheckbox2 = document.createElement("input")
groupCheckbox2.setAttribute("type","checkbox")
groupCheckbox2.setAttribute("id","inlinecheckBox2")
groupCheckbox2.setAttribute("class","form-check-input")
groupCheckbox2.setAttribute("value","chicken kothu")
groupCheckbox2.setAttribute("name","group1")
foodDiv2.append(groupCheckbox2)

const foodLabel2 =document.createElement("label")
foodLabel2.setAttribute("for","inlinecheckBox2")
foodLabel2.classList.add("form-check-label")
foodLabel2.innerHTML ="chicken kothu"
foodDiv2.append(foodLabel2)

const foodDiv3 = document.createElement("div")
foodDiv3.setAttribute("id","foodDiv3")
foodDiv3.classList.add("form-check","form-check-inline")
fieldset1.append(foodDiv3)

const groupCheckbox3 = document.createElement("input")
groupCheckbox3.setAttribute("type","checkbox")
groupCheckbox3.setAttribute("id","inlinecheckbox3")
groupCheckbox3.classList.add("form-check-input")
groupCheckbox3.setAttribute("value","Paneer butter masala")
groupCheckbox3.setAttribute("name","group1")
foodDiv3.append(groupCheckbox3)

const foodLabel3 =document.createElement("label")
foodLabel3.setAttribute("for","inlinecheckBox3")
foodLabel3.classList.add("form-check-label")
foodLabel3.innerHTML = "Paneer butter masala"
foodDiv3.append(foodLabel3)



const foodDiv4 = document.createElement("div")
foodDiv4.setAttribute("id","foodDiv4")
foodDiv4.classList.add("form-check","form-check-inline")
fieldset1.append(foodDiv4)

const groupCheckbox4 = document.createElement("input")
groupCheckbox4.setAttribute("id","inlinecheckbox4")
groupCheckbox4.setAttribute("type","checkbox")
groupCheckbox4.setAttribute("name","group1")
groupCheckbox4.setAttribute("value","nashville chicken Burger")
groupCheckbox4.classList.add("form-check-input")
foodDiv4.append(groupCheckbox4)

const foodLabel4 = document.createElement("label")
foodLabel4.setAttribute("for","inlinecheckBox4")
foodLabel4.classList.add("form-check-label")
foodLabel4.innerHTML = "nashville chicken Burger"
foodDiv4.append(foodLabel4)


const foodDiv5 = document.createElement("div")
foodDiv5.setAttribute("id","foodDiv5")
foodDiv5.classList.add("form-check","form-check-inline")
fieldset1.append(foodDiv5)

const groupCheckbox5 = document.createElement("input")
groupCheckbox5.setAttribute("type","checkbox")
groupCheckbox5.setAttribute("name","group1")
groupCheckbox5.setAttribute("id","inlinecheckbox5")
groupCheckbox5.setAttribute("value","paratto with Paya")
groupCheckbox5.classList.add("form-check-input")
foodDiv5.append(groupCheckbox5)

const foodLabel5 = document.createElement("label")
foodLabel5.setAttribute("for","inlinecheckBox5")
foodLabel5.classList.add("form-check-label")
foodLabel5.innerHTML = "paratto with Paya"
foodDiv5.append(foodLabel5)

const statediv = document.createElement("div")
// countrydiv.setAttribute("id","countryDiv")
statediv.setAttribute("class","form-group")
getForm.append(statediv)

const stateLabel = document.createElement("label")
stateLabel.setAttribute("id","stateLabel")
stateLabel.setAttribute("for","state")
stateLabel.innerHTML ="State"       
statediv.append(stateLabel)


const stateInput = document.createElement("input")
stateInput.setAttribute("id","state")
stateInput.classList.add("form-control","form-group")
stateInput.setAttribute("placeholder","State")
stateInput.setAttribute("type","text")
stateInput.setAttribute("required","")
statediv.append(stateInput)


const countrydiv = document.createElement("div")
countrydiv.setAttribute("id","countryDiv")
countrydiv.setAttribute("class","form-group")
getForm.append(countrydiv)

const countryLabel = document.createElement("label")
countryLabel.setAttribute("id","countryLabel")
countryLabel.setAttribute("for","country")
countryLabel.innerHTML ="Country"
countrydiv.append(countryLabel)


const countryInput = document.createElement("input")
countryInput.setAttribute("id","country")
countryInput.classList.add("form-control","form-group")
countryInput.setAttribute("placeholder","Country")
countryInput.setAttribute("type","text")
countryInput.setAttribute("required","")
countrydiv.append(countryInput)




const textareaDiv = document.createElement("div")
textareaDiv.setAttribute("id","textareadiv")
textareaDiv.setAttribute("class","form-group")
getForm.append(textareaDiv)

const textLabel = document.createElement("label")
textLabel.setAttribute("id","textLabel")
textLabel.setAttribute("for","comments")
textLabel.innerHTML = "Comments"
textLabel.setAttribute("placeHolder","any additional comments for improvements")
textareaDiv.append(textLabel)


const textarea = document.createElement("textarea")
textarea.setAttribute("id","textarea")
textarea.classList.add("form-control","form-group")
textarea.setAttribute("name","comments")
textareaDiv.append(textarea)

const submitButton = document.createElement("button")
submitButton.classList.add("btn","btn-primary","mb-2")
submitButton.setAttribute("type","submit")
submitButton.setAttribute("id","submit")
submitButton.innerHTML ="Submit"
getForm.append(submitButton)


const h3 = document.createElement("h3")
h3.setAttribute("class","sideHead")
h3.innerHTML = " The submitted items listed Below thankyou...... "
document.body.append(h3)


const tablediv = document.createElement("div")
tablediv.setAttribute("class","table-responsive")
tablediv.setAttribute("id","table")

document.body.append(tablediv)

let table = document.createElement("table")
table.setAttribute("id","table")
table.classList.add(
    "table",
    "table-responsive-sm",
    "table-border",
    "table-hover",
    "table-striped"
    
)

let header = table.createTHead()
 let row = header.insertRow(0);

 row.insertCell(0).innerHTML ="Id";
 row.insertCell(1).innerHTML = "First Name";
 row.insertCell(2).innerHTML = "Last Name";
 row.insertCell(3).innerHTML = "Email";
row.insertCell(4).innerHTML = "Adddress";
row.insertCell(5).innerHTML = "Pincode";
row.insertCell(6).innerHTML = "Gender";
row.insertCell(7).innerHTML = "Fav food"
row.insertCell(8).innerHTML = "State"
row.insertCell(7).innerHTML = "Country"

let Tbody = table.createTBody()
tablediv.append(table)



const formData =[]

let flag = false;

let IdNo = 0


function createData (Params){
    return{
        firstName : firstName.value,
        lastName : lastName.value,
        email : email.value,
        address:address.value,
        pincode :pincode.value,
        gender :()=>{
            if(genderRadio1.checked){
                return "Male"
            }else if(genderRadio2.checked){
                return "female"
            }else{
                return "prefer not to say"
            }

        },
        favfood :[...Params],
        state:state.value,
        country:country.value
        
    }
}


function foodSelection(){
    let count  = 0;
    let foodarr =[]

    if(groupCheckbox1.checked){
        foodarr.push(foodlabel1.innerText)
        count++
    }
    if(groupCheckbox2.checked){
        foodarr.push(foodLabel2.innerText)
        count++
    }
    if(groupCheckbox3.checked){
        foodarr.push(foodLabel3.innerText)
        count++
    }
    if(groupCheckbox4.checked){
        foodarr.push(foodLabel4.innerText)
        count++
    }
    if(groupCheckbox5.checked){
        foodarr.push(foodLabel5.innerText)
        count++
    } 
    if(count>=2){
        return {foodarr , result:true}
    }else
        return false
    
}



getForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const foodresult = foodSelection();
    if(foodresult){
        flag = false;
        const data =  createData(foodresult.foodarr)
        pushDataToArray(data)
        addDataToTable(data)
        getForm.reset();
    }else{
        flag= true;
        alert("you want to select atleast 2 items ")
        return;
    }
})

function pushDataToArray(data){
    formData.push(data)
}


function addDataToTable(data){
    const child=`
    <th>${++IdNo}</th>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.address}</td>
    <td>${data.pincode}</td>
     <td>${data.gender()}</td>
      <td>${[...data.favfood]}</td>
       <td>${data.state}</td>
        <td>${data.country}</td>
    `;
    const tableRow = Tbody.insertRow();
    tableRow.innerHTML = child;
}