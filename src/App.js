import React, { useState, useEffect } from "react";
import NewRegister from "./register";
import NewEvidence from "./evidence";
import NewLogin from "./NewLogin";
import { NewInformation } from "./NewInformation";
import { NewContact } from "./NewContact";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Pojistenci from "./Pojistenci";
import { Pojisteni } from "./Pojisteni";
import { UserInformation } from "./UserInformation";

export default function App() {
  const initialRegistrationInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    city: "",
    password: "",
    controlPassword: "",
    insuranceNumber: "",
    insuranceCode: "",
    gender: "",
    termsAccepted: false,
  };

  const [currentPage, setCurrentPage] = useState("contact");
  const [evidenceList, setEvidenceList] = useState([]);
  const [numberOfContracts, setNumberOfContracts] = useState([]);
  const [registrationInfo, setRegistrationInfo] = useState(
    initialRegistrationInfo
  );

  //console.log(evidenceList);

  const [userLogin, setUserLogin] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  //console.log(isAdmin);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    controlPassword: "",
  });

  const [emailList, setEmailList] = useState([]);
  const [passwordList, setPasswordList] = useState([]);
  const [passwordControlList, setPasswordControlList] = useState([]);
  const [showInsuranceTypes, setShowInsuranceTypes] = useState(false);

  // console.log(evidenceList);
  // console.log(evidenceList[1]);
  // console.log(loginData.email);
  //console.log(loginData.email === evidenceList.email);

  //console.log(emailList, passwordList, passwordControlList);
  //console.log(isLoggedIn);

  // const updateLocalStorageData = () => {
  //   const storedEvidence =
  //     JSON.parse(localStorage.getItem("evidenceTEST")) || [];
  //   setEvidenceList(storedEvidence);
  //   setNumberOfContracts(storedEvidence);
  //   // console.log(storedEvidence);
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     updateLocalStorageData();
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show-menu");
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  function handleLogin(e) {
    e.preventDefault();

    const evidenceList = JSON.parse(localStorage.getItem("evidenceTEST")) || [];

    const firstNames = [];
    const emails = [];
    const passwords = [];
    const passwordControls = [];

    evidenceList.forEach((item) => {
      if (item.email && item.email.trim() !== "") {
        emails.push(item.email);
      }
      if (item.password && item.password.trim() !== "") {
        passwords.push(item.password);
      }
      if (item.controlPassword && item.controlPassword.trim() !== "") {
        passwordControls.push(item.controlPassword);
      }
      if (item.firstName && item.firstName.trim() !== "") {
        firstNames.push(item.firstName);
      }
    });

    processLogin(emails, passwords, passwordControls, firstNames);
  }

  function processLogin(emails, passwords, passwordControls) {
    const { email, password, controlPassword } = loginData;
    let isLoggedIn = false;

    for (let i = 0; i < emails.length; i++) {
      if (
        emails[i] === email &&
        passwords[i] === password &&
        passwordControls[i] === controlPassword
      ) {
        isLoggedIn = true;
      }
    }

    if (isLoggedIn) {
      alert("Úspěšně jste se přihlásili!");
      if (email === "martinteleki@seznam.cze") {
        setIsAdmin(true);
      }
      changePage("login-jmeno");
      setIsLoggedIn(true);
    } else {
      changePage("login");
      alert("Nesprávný email, heslo nebo kontrolní heslo.");
    }
  }

  return (
    <div>
      <NavBar
        toggleMenu={toggleMenu}
        changePage={changePage}
        isLoggedIn={isLoggedIn}
        loginData={loginData}
        evidenceList={evidenceList}
        setIsLoggedIn={setIsLoggedIn}
        setIsAdmin={setIsAdmin}
        isAdmin={isAdmin}
        setEvidenceList={setEvidenceList}
        setNumberOfContracts={setNumberOfContracts}
        setShowInsuranceTypes={setShowInsuranceTypes}
        showInsuranceTypes={showInsuranceTypes}
      />
      <Main
        currentPage={currentPage}
        registrationInfo={registrationInfo}
        setRegistrationInfo={setRegistrationInfo}
        initialRegistrationInfo={initialRegistrationInfo}
        evidenceList={evidenceList}
        setEvidenceList={setEvidenceList}
        numberOfContracts={numberOfContracts}
        setCurrentPage={setCurrentPage}
        changePage={changePage}
        setUserLogin={setUserLogin}
        userLogin={userLogin}
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        emailList={emailList}
        setEmailList={setEmailList}
        passwordList={passwordList}
        setPasswordList={setPasswordList}
        isAdmin={isAdmin}
        setNumberOfContracts={setNumberOfContracts}
        showInsuranceTypes={showInsuranceTypes}
        setShowInsuranceTypes={setShowInsuranceTypes}
      />
      <Footer />
    </div>
  );
}

function Main({
  currentPage,
  registrationInfo,
  setRegistrationInfo,
  setEvidenceList,
  evidenceList,
  numberOfContracts,
  setCurrentPage,
  changePage,
  setUserLogin,
  userLogin,
  loginData,
  setLoginData,
  handleLogin,
  isLoggedIn,
  emailList,
  setEmailList,
  passwordList,
  setPasswordList,
  isAdmin,
  setNumberOfContracts,
  showInsuranceTypes,
  setShowInsuranceTypes,
}) {
  // console.log(isAdmin);

  return (
    <div className="">
      {currentPage === "informace" && (
        <div>
          <NewInformation
            evidenceList={evidenceList}
            numberOfContracts={numberOfContracts}
          />
        </div>
      )}
      {currentPage === "register" && (
        <div className="register-margin">
          <NewRegister
            registrationInfo={registrationInfo}
            setRegistrationInfo={setRegistrationInfo}
            setCurrentPage={setCurrentPage}
            changePage={changePage}
            evidenceList={evidenceList}
            setEvidenceList={setEvidenceList}
            setNumberOfContracts={setNumberOfContracts}
          />
        </div>
      )}

      {currentPage === "login" && (
        <div className="login-margin">
          <NewLogin
            changePage={changePage}
            setUserLogin={setUserLogin}
            userLogin={userLogin}
            loginData={loginData}
            setLoginData={setLoginData}
            handleLogin={handleLogin}
            evidenceList={evidenceList}
            emailList={emailList}
            setEmailList={setEmailList}
            passwordList={passwordList}
            setPasswordList={setPasswordList}
          />
        </div>
      )}
      {isAdmin && currentPage === "evidence" && (
        <div className="evidence-margin">
          <NewEvidence
            evidenceList={evidenceList}
            setEvidenceList={setEvidenceList}
            userLogin={userLogin}
          />
        </div>
      )}

      {currentPage === "contact" && (
        <div className="contact-margin">
          <NewContact />
        </div>
      )}
      <div>
        {currentPage === "pojistenci" && isAdmin && (
          <div className="">
            <Pojistenci
              evidenceList={evidenceList}
              setEvidenceList={setEvidenceList}
            />
          </div>
        )}
      </div>
      {currentPage === "pojisteni" && (
        <div className="">
          <Pojisteni
            changePage={changePage}
            showInsuranceTypes={showInsuranceTypes}
            setShowInsuranceTypes={setShowInsuranceTypes}
          />
        </div>
      )}

      {currentPage === "login-jmeno" && (
        <div className="">
          <UserInformation loginData={loginData} evidenceList={evidenceList} />
        </div>
      )}

      {/* {currentPage === "udalosti" && (
        <div className="">
          <Events loginData={loginData} evidenceList={evidenceList} />
        </div>
      )} */}
    </div>
  );

  // function Events() {
  //   console.log("pes");
  //   return (
  //     <div>
  //       <p>Pes</p>
  //     </div>
  //   );
  // }
}
