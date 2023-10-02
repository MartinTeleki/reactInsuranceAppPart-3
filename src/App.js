import React, { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState("informace");
  const [evidenceList, setEvidenceList] = useState([]);
  const [numberOfContracts, setNumberOfContracts] = useState([]);
  const [registrationInfo, setRegistrationInfo] = useState(
    initialRegistrationInfo
  );

  const [userLogin, setUserLogin] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    controlPassword: "",
  });

  const [emailList, setEmailList] = useState([]);
  const [passwordList, setPasswordList] = useState([]);
  const [showInsuranceTypes, setShowInsuranceTypes] = useState(false);

  function changePage(page) {
    setCurrentPage(page);
    document.title = `Pojišťovna React/${page}`;
  }
  return (
    <div>
      <NavBar
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
        currentPage={currentPage}
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
        isLoggedIn={isLoggedIn}
        emailList={emailList}
        setEmailList={setEmailList}
        passwordList={passwordList}
        setPasswordList={setPasswordList}
        isAdmin={isAdmin}
        setNumberOfContracts={setNumberOfContracts}
        showInsuranceTypes={showInsuranceTypes}
        setShowInsuranceTypes={setShowInsuranceTypes}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
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
  emailList,
  setEmailList,
  passwordList,
  setPasswordList,
  isAdmin,
  setNumberOfContracts,
  showInsuranceTypes,
  setShowInsuranceTypes,
  setIsAdmin,
  setIsLoggedIn,
}) {
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
            setIsAdmin={setIsAdmin}
            setIsLoggedIn={setIsLoggedIn}
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
    </div>
  );
}
