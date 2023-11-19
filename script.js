function createRandomId() {
  const randomId = Math.floor(Math.random() * 500);
  return randomId;
}
//
//
//
const apiUsers = [
  { id: createRandomId(), name: "Drake", lastname: "Jhon" },
  { id: createRandomId(), name: "James", lastname: "Clark" },
  { id: createRandomId(), name: "Nazlı", lastname: "Bilen" },
  { id: createRandomId(), name: "Azra", lastname: "Aydın" },
];

console.log("Original Api Users:", apiUsers);
//
//
//
//
//
const mainTable = document.getElementById("mainTable");
const newUserContainer = document.getElementById("addNewPerson");
//
const nameInput = document.getElementById("nameId");
const lastNameInput = document.getElementById("lastNameId");
//
//
const addNewUserBtn = document.getElementById("newUserBtn");
//
//
const deleteDiv = document.getElementById("delete-div");
const warningOkeyBtn = document.getElementById("okeyBtn");
const warningCancelBtn = document.getElementById("cancelBtn");
//
//
//
//
//
// doc.createElement in fonksiyon hali
function createHTMLElement(elementTag, ElementValue) {
  const createTag = document.createElement(elementTag);
  if (ElementValue) {
    createTag.innerText = ElementValue;
  }
  return createTag;
}
//
//
//
//
//
//
//
//
// warningOkeyBtn function
function warningOkeyBtnF(index) {
  warningOkeyBtn.onclick = function () {
    apiUsers.splice(index, 1);
    mainTable.innerText = "";
    updateDomF();
    deleteDiv.style.top = "-50%";
    removeModal();
  };
  return warningOkeyBtn;
}
//
//
//
// warningCancelBtn function
function warningCancelBtnF() {
  warningCancelBtn.onclick = function () {
    removeModal();
    deleteDiv.style.top = "-50%";
  };
  return warningCancelBtn;
}
//
//
//
//
//
//
//
//
//
//
// updateDom function
function updateDomF() {
  apiUsers.forEach(function (user, index) {
    //
    const ulContainer = createHTMLElement("ul");
    ulContainer.classList.add("table-row");
    //
    const liId = createHTMLElement("li", user.id);
    //
    const liName = createHTMLElement("li", user.name);
    //
    const liLastName = createHTMLElement("li", user.lastname);
    //
    const liButtonContainer = createHTMLElement("li");
    liButtonContainer.classList.add("button-container");
    //
    const editBtn = createHTMLElement("button", "Edit");
    editBtn.classList.add("edit-btn");
    //
    const removeBtn = createHTMLElement("button", "Remove");
    removeBtn.classList.add("remove-btn");
    //
    //
    liButtonContainer.append(editBtn);
    liButtonContainer.append(removeBtn);
    //
    //
    ulContainer.append(liId);
    ulContainer.append(liName);
    ulContainer.append(liLastName);
    ulContainer.append(liButtonContainer);
    //
    //
    mainTable.appendChild(ulContainer);
    //
    //
    //
    //
    editBtn.onclick = function () {
      //
      //
      liName.innerText = "";
      const inputName = createHTMLElement("input");
      inputName.classList.add("edit-input-button");
      inputName.value = user.name;
      //
      //
      liLastName.innerText = "";
      const inputLastName = createHTMLElement("input");
      inputLastName.classList.add("edit-input-button");
      inputLastName.value = user.lastname;
      //
      //
      //
      removeBtn.remove();
      ulContainer.style.zIndex = "3";
      addModal();
      editBtn.remove();
      //
      //
      //
      //
      //
      //
      //
      //
      const confrimBtn = createHTMLElement("button", "Confrim");
      confrimBtn.classList.add("edit-btn");
      liButtonContainer.prepend(confrimBtn);
      //
      //
      confrimBtn.onclick = function () {
        if (inputName.value == "" || inputLastName.value == "") {
          inputName.placeholder = "Can't Left Empty";
          inputLastName.placeholder = "Can't Left Empty";
        } else {
          removeModal();
          user.name = inputName.value;
          user.lastname = inputLastName.value;
          mainTable.innerText = "";
          updateDomF();
        }
      };
      //
      //
      //
      //
      liName.append(inputName);
      liLastName.append(inputLastName);
      inputName.focus();
      console.log(apiUsers);
    };
    //
    //
    //
    //
    //
    //
    //
    removeBtn.onclick = function () {
      addModal();
      deleteDiv.style.top = "20%";
      //
      //
      warningOkeyBtnF(index);
      //
      //
      warningCancelBtnF();
    };
    //
    //
    //
  });
  return mainTable;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
// sign in button function
function signBtnF() {
  nameInput.focus();
  const signInBtn = document.getElementById("signIn");
  signInBtn.onclick = function () {
    //
    const newPersonObject = {
      id: createRandomId(),
      name: nameInput.value,
      lastname: lastNameInput.value,
    };
    if (nameInput.value == "") {
      nameInput.style.borderBottom = "2px solid red";
      lastNameInput.style.borderBottom = "2px solid black";
    } else if (lastNameInput.value == "") {
      nameInput.style.borderBottom = "2px solid black";
      lastNameInput.style.borderBottom = "2px solid red";
    } else {
      apiUsers.push(newPersonObject);
      newUserContainer.style.top = "-50%";
      mainTable.innerText = "";
      updateDom();
      nameInput.value = "";
      lastNameInput.value = "";
      removeModal();
      newUserContainer.style.top = "-50%";
      console.log(apiUsers);
    }
  };
  return signInBtn;
}
//
//
//
// cancel button function
function cancelBtnF() {
  const cancelBtn = document.getElementById("cancel");
  cancelBtn.onclick = function () {
    newUserContainer.style.top = "-50%";
    nameInput.value = "";
    lastNameInput.value = "";
    nameInput.style.borderBottom = "2px solid black";
    lastNameInput.style.borderBottom = "2px solid black";
    removeModal();
    newUserContainer.style.top = "-50%";
  };
  return cancelBtn;
}
//
//
//
//
//
//
//
//
//
// removeModal function
function removeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("modal");
  return modal;
}
//
//
// addModal function
function addModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("modal");
  return modal;
}
//
//
//
//
//
//
//
//
//
//
//
//
// addNewUser function
function addNewUserF() {
  newUserContainer.style.top = "20%";
  nameInput.value = "";
  lastNameInput.value = "";
  nameInput.style.borderBottom = "2px solid black";
  lastNameInput.style.borderBottom = "2px solid black";
  signBtnF();
  cancelBtnF();
}
//
//
//
//
//
//
//
//
//
function updateDom() {
  updateDomF();
}
//
//
//
//
//
//
//
// add butonuna tıklanırsa
addNewUserBtn.onclick = function () {
  addNewUserF();
  addModal();
};
//
//
//
window.onload = function () {
  updateDom();
};
//
//
//
//
// Modal dışına tıklanınca kapatma işlemi
window.onclick = function (event) {
  if (event.target == modal) {
    removeModal();
    addNewUserF();
    newUserContainer.style.top = "-50%";
    mainTable.innerText = "";
    updateDomF();
    deleteDiv.style.top = "-50%";
  }
};
