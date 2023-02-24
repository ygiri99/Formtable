//Title
const title = document.createElement("h1");
title.setAttribute("id","title");
title.className = "text-center text-danger";
title.innerText = "DOM Manipulation with Forms";
//creating p
const p = document.createElement('p');
p.innerText = 'Entered order in form on click adding button will display in table';
p.id = 'description';
p.className = 'text-lighter text-center text-success';

//Form creating
const form = document.createElement('form');
form.setAttribute("id", "form");
form.className = "row bg-info mx-4 mb-1";
//First name div
const fNamediv = document.createElement("div");
fNamediv.className = "form-group col-md-4 col-10";
const fLable = document.createElement("label");
fLable.setAttribute("for","first-name");
fLable.setAttribute("form-control","form-label");
fLable.className = "col-md-4 col-10 h5";
fLable.innerText = "Name";
const fInputElement = document.createElement("input");
fInputElement.type = "text";
fInputElement.className = "col-md-4 col-10 form-control";
fInputElement.setAttribute("id","first-name");
fInputElement.name = "first_name";
fInputElement.placeholder = "firstname";
fInputElement.required = true; 
//Last name div
const lNamediv = document.createElement("div");
lNamediv.className = "form-group col-md-4 col-10";
const lLable = document.createElement("label");
lLable.setAttribute("for","last-name");
lLable.setAttribute("form-control","form-label");
lLable.className = "col-md-4 col-10 h5";
lLable.innerHTML = "&nbsp;";
const lnameInputElement = document.createElement("input");
lnameInputElement.type = "text";
lnameInputElement.className = "col-md-4 col-10 form-control";
lnameInputElement.id = "last-name";
lnameInputElement.name = "last_name";
lnameInputElement.placeholder = "lastname";
lnameInputElement.required = true;
//Address div
const addressDiv = document.createElement("div");
addressDiv.className = "form-group col-md-6 col-12";
const addressLable = document.createElement("label");
addressLable.setAttribute("for","address");
addressLable.setAttribute("form-control","form-label");
addressLable.className = "h5";
addressLable.innerText = "Address";
const textareaElement = document.createElement("textarea");
textareaElement.className = "form-control";
textareaElement.placeholder = "Address";
textareaElement.id = "address";
textareaElement.name = "address";
textareaElement.rows = "4";
textareaElement.cols = "8";
textareaElement.required = true;
//Select food div
const selectDiv = document.createElement("div");
selectDiv.className = "col-md-3 col-6 h5";
selectDiv.innerText = "Select Food";
const selectElement = document.createElement("select");
selectElement.className = "form-select col-md-3 mt-2";
selectElement.id = "food";
selectElement.name = "food";
selectElement.size = "5";
selectElement.setAttribute("aria-label","size 3");
selectElement.multiple = true;
['Salad','Tiffin','Meals','Minimeals','Sandwich'].forEach(food => {
  const option = document.createElement("option");
  option.value = food;
  option.innerText = food;
  selectElement.appendChild(option);
})
//Pincode div
const pincodeDiv = document.createElement("div");
pincodeDiv.className = "form-group col-md-4 col-10 d-flex align-items-end";
const pincodeLable = document.createElement("label");
pincodeLable.setAttribute("for","pincode");
pincodeLable.className = "form-control form-label";
pincodeLable.className = "h5 mt-1";
pincodeLable.innerHTML = "Pincode";
const pincodeInputElement = document.createElement("input");
pincodeInputElement.type = "text";
pincodeInputElement.className = "form-control m-1";
pincodeInputElement.placeholder = "pincode";
pincodeInputElement.id = "pincode";
pincodeInputElement.name = "pincode";
pincodeInputElement.size = "6";
pincodeInputElement.min = "100000";
pincodeInputElement.max = "999999";
pincodeInputElement.required = true;
pincodeDiv.append(pincodeLable,pincodeInputElement);
//Gender div
const genderDiv = document.createElement("div");
genderDiv.className = "col-md-4 col-10 mt-3";
const genderLable = document.createElement("label");
genderLable.setAttribute("for","gender");
genderLable.setAttribute("form-control","form-label");
genderLable.className = "h5 m-2";
genderLable.innerHTML = "Gender: ";
const genderInputElementMale = document.createElement("input");
genderInputElementMale.type = "radio";
genderInputElementMale.id = "gender";
genderInputElementMale.name = "gender";
genderInputElementMale.value = "Male";
const spanMale = document.createElement("span");
spanMale.innerText = "Male ";
const spanFemale = document.createElement("span");
spanFemale.innerText = "Female ";
const genderInputElementFemale = document.createElement("input");
genderInputElementFemale.type = "radio";
genderInputElementFemale.id = "gender";
genderInputElementFemale.name = "gender";
genderInputElementFemale.value = "Female";
genderInputElementFemale.innerText = "Female";
genderDiv.append(genderLable,genderInputElementMale,spanMale,genderInputElementFemale,spanFemale);
//state and country div
const statecountryDiv = document.createElement("div");
statecountryDiv.className = "row";
//State div
const stateDiv = document.createElement("div");
stateDiv.className = "col-md-3";
const stateLable = document.createElement("label");
stateLable.setAttribute("for","state");
stateLable.setAttribute("form-control","form-label");
stateLable.className = "h5";
stateLable.innerHTML = "State";
const stateInputElement = document.createElement("input");
stateInputElement.type = "text";
stateInputElement.className = "form-control";
stateInputElement.id = "state";
stateInputElement.name = "state";
stateDiv.append(stateLable,stateInputElement);
//country div
const countryDiv = document.createElement("div");
countryDiv.className = "col-md-3";
const countryLable = document.createElement("label");
countryLable.setAttribute("for","country");
countryLable.setAttribute("form-control","form-label");
countryLable.className = "h5";
countryLable.innerHTML = "Country";
const countryInputElement = document.createElement("input");
countryInputElement.type = "text";
countryInputElement.className = "form-control";
countryInputElement.id = "country";
countryInputElement.name = "country";
countryDiv.append(countryLable,countryInputElement);
statecountryDiv.append(stateDiv,countryDiv);

//Add-Data button to form
const button = document.createElement("button");
button.setAttribute("class", " col-md-3 col-5 btn btn-primary my-2 mx-5")
button.setAttribute("type", "submit");
button.setAttribute("id","submit");
button.innerText = "+Add-order";


fNamediv.append(fLable,fInputElement);
lNamediv.append(lLable,lnameInputElement);
addressDiv.append(addressLable,textareaElement);
selectDiv.append(selectElement);
form.append(fNamediv,lNamediv,addressDiv,selectDiv,pincodeDiv,genderDiv,statecountryDiv,button);

//Tablediv creation
const mainDiv =  document.createElement("div");
mainDiv.setAttribute("class","container text-center bordered");

//Table creation
const table = document.createElement("table");
table.className ="table table-bordered border-primary";
mainDiv.append(table);
//Table head
const headDiv = document.createElement("thead");
headDiv.setAttribute("class","row bg-warning");
const headDetail = ["FirstName", "LastName", "Address", "Pincode", "Gender", "Food", "State", "Country"];
headDetail.forEach((element) => {
  const th = document.createElement("th");
  th.setAttribute("class", "col");
  th.innerText = element;
  headDiv.appendChild(th);
})
table.appendChild(headDiv);

//Table body data adding fuction
const dataRow = (...rowData) => {
    console.log(rowData);
    let tbody =  document.createElement("tbody");
    tbody.setAttribute("class","row");
    rowData.forEach(key => {
      console.log(key);
      let td =  document.createElement("td");
      td.setAttribute("class", "col");
      td.innerText = key;
      tbody.appendChild(td);
    })
    table.appendChild(tbody);
    document.getElementById("form").reset();
  }
document.body.append(title,p,form,mainDiv);

//Even handling for data from FORM
const orderForm = document.getElementById("form");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {};
  let selectFood = true;
  console.log(e);
  Array.from(e.target.elements).forEach((element) => {

    if (element.nodeName === 'INPUT') {
      if (element.name === "gender") {
        if (element.checked === true)
          data[element.name] = element.value;
      }
      else
        data[element.name] = element.value;
    }
    else if (element.nodeName === "TEXTAREA") {  //address input
      data[element.name] = element.value;
    }
    else if (element.nodeName === "SELECT") {

      var selected = [...element.options]
        .filter(option => option.selected)
        .map(option => option.value);
      if (selected.length < 2) {           //minimum 2 food to be selected
        selectFood = false;
        alert("SELECT ATLEAST 2 FOOD");
      }
      data[element.name] = selected;
    }
  });
  console.log(data);
  let { first_name, last_name, address, pincode, gender, food, state, country } = data;
  if (selectFood === true)   //if data is ok send to table
    dataRow(first_name, last_name, address, pincode, gender, food, state, country);

})
