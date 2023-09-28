import React from "react";
import "./userInformation.css";

export function UserInformation({ loginData, evidenceList }) {
  const user = evidenceList.find((person) => person.email === loginData.email);
  console.log(evidenceList);
  console.log(user);

  return (
    <div className="user-info-container">
      <h2>Osobní údaje uživatele {user.firstName}</h2>
      <div className="user-info">
        <div className="user-info-item">
          <strong>Jméno:</strong> {user.firstName}
        </div>
        <div className="user-info-item">
          <strong>Příjmení:</strong> {user.lastName}
        </div>
        <div className="user-info-item">
          <strong>Město:</strong> {user.city}
        </div>
        <div className="user-info-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="user-info-item">
          <strong>Pohlaví:</strong> {user.gender}
        </div>
        <div className="user-info-item">
          <strong>Identifikační číslo:</strong> {user.id}
        </div>
        <div className="user-info-item">
          <strong>Kód pojištění:</strong> {user.insuranceCode}
        </div>
        <div className="user-info-item">
          <strong>Číslo pojištění:</strong> {user.insuranceNumber}
        </div>
        <div className="user-info-item">
          <strong>Předmět pojištění:</strong> {user.insuranceSubject}
        </div>
        <div className="user-info-item">
          <strong>Typ pojištění:</strong> {user.insuranceType}
        </div>
        <div className="user-info-item">
          <strong>Roční platba za pojištění:</strong> {user.insuredAmount}
        </div>
        <div className="user-info-item">
          <strong>Telefonní číslo:</strong> {user.phoneNumber}
        </div>
        <div className="user-info-item">
          <strong>Všeobecné podmínky byly splněny:</strong>{" "}
          {user.termsAccepted ? "Ano" : "Ne"}
        </div>
        <div className="user-info-item">
          <strong>Platnost pojištění od:</strong> {user.validityFrom}
        </div>
        <div className="user-info-item">
          <strong>Platnost pojištění do:</strong> {user.validityTo}
        </div>
      </div>
    </div>
  );
}
