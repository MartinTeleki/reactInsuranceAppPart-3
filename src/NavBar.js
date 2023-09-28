import React from "react";
import "./index.css";

export function NavBar({
  toggleMenu,
  changePage,
  isLoggedIn,
  loginData,
  evidenceList,
  setIsLoggedIn,
  setIsAdmin,
  isAdmin,
  setEvidenceList,
  setNumberOfContracts,
  setShowInsuranceTypes,
  showInsuranceTypes,
}) {
  function UpdateLocalStorageData() {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];
    setEvidenceList(storedEvidence);
    setNumberOfContracts(storedEvidence);
    changePage("login");

    // console.log(storedEvidence);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Pojišťovna React</p>
        </div>
        <div className="bar-container" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links" id="nav-links">
          <NavInformation changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavRegister changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavLogin
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            UpdateLocalStorageData={UpdateLocalStorageData}
          />

          <NavPojistenci
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          />

          <NavPojisteni
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            setShowInsuranceTypes={setShowInsuranceTypes}
            showInsuranceTypes={showInsuranceTypes}
          />

          {/* <NavUdalosti changePage={changePage} isLoggedIn={isLoggedIn} /> */}

          <NavEvidence
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          />

          <NavContact changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavLoginJmeno
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            loginData={loginData}
            evidenceList={evidenceList}
          />

          <NavOdhlasit
            changePage={changePage}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setIsAdmin={setIsAdmin}
          />
        </ul>
      </nav>
    </div>
  );
}
function NavInformation({ changePage, isLoggedIn }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a href="#" alt="informace" onClick={() => changePage("informace")}>
            Informace
          </a>
        </li>
      )}
    </div>
  );
}
function NavRegister({ changePage, isLoggedIn }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a href="#" alt="registrace" onClick={() => changePage("register")}>
            Registrace
          </a>
        </li>
      )}
    </div>
  );
}
function NavLogin({ changePage, isLoggedIn, UpdateLocalStorageData }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a href="#" alt="login" onClick={UpdateLocalStorageData}>
            Login
          </a>
        </li>
      )}
    </div>
  );
}
function NavEvidence({ changePage, isLoggedIn, isAdmin }) {
  return (
    <div>
      {isAdmin && (
        <li>
          <a href="#" alt="evidence" onClick={() => changePage("evidence")}>
            Evidence
          </a>
        </li>
      )}
    </div>
  );
}
function NavContact({ changePage, isLoggedIn, isAdmin }) {
  return (
    <div>
      {!isAdmin && (
        <li>
          <a href="#" alt="kontakt" onClick={() => changePage("contact")}>
            Contact
          </a>
        </li>
      )}
    </div>
  );
}
function NavPojistenci({ changePage, isAdmin }) {
  return (
    <div>
      {isAdmin && (
        <li>
          <a href="#" alt="pojistenci" onClick={() => changePage("pojistenci")}>
            Pojištěnci
          </a>
        </li>
      )}
    </div>
  );
}
function NavPojisteni({ changePage, isLoggedIn, setShowInsuranceTypes }) {
  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="pojisteni"
            onClick={() => {
              changePage("pojisteni");
              setShowInsuranceTypes(false);
            }}
          >
            Pojištění
          </a>
        </li>
      )}
    </div>
  );
}
// function NavUdalosti({ changePage, isLoggedIn }) {
//   return (
//     <div>
//       {isLoggedIn && (
//         <li>
//           <a href="#" alt="udalosti" onClick={() => changePage("udalosti")}>
//             Udalosti
//           </a>
//         </li>
//       )}
//     </div>
//   );
// }
function NavOdhlasit({ changePage, isLoggedIn, setIsLoggedIn, setIsAdmin }) {
  // console.log(setIsAdmin);
  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="odhlasit"
            onClick={() => {
              changePage("login");
              setIsLoggedIn(false);
              setIsAdmin(false);
            }}
          >
            Odhlásit
          </a>
        </li>
      )}
    </div>
  );
}
function NavLoginJmeno({ changePage, isLoggedIn, loginData, evidenceList }) {
  const email = loginData.email;
  const person = evidenceList.find((osoba) => osoba.email === email);

  return (
    <div>
      {isLoggedIn && (
        <li>
          <a
            href="#"
            alt="login-jmeno"
            onClick={() => changePage("login-jmeno")}
          >
            {person.firstName}
          </a>
        </li>
      )}
    </div>
  );
}
