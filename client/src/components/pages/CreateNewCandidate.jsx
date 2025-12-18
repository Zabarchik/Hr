import React, { useState } from 'react';
import candidate from '../../../../server/db/models/candidate';

export default function NewTrainingForm({ trainings, setTrainings }) {
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');
  const [positionInput, setPositionInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [fileInput, setFileInput] = useState(null);

  const clickHandler = () => {
    const newCandidate = {
      name: nameInput,
      surname: surnameInput,
      position: positionInput,
      phone: phoneInput,
    };
    const candidatesEditted = [newCandidate, ...candidate];
    setTrainings(candidatesEditted);

    setNameInput('');
    setSurnameInput('');
    setPositionInput('');
    setPhoneInput('');
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Имя"
        //
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
        value={nameInput}
      />
      <br />
      <input
        type="text"
        placeholder="Фамилия"
        //
        onChange={(e) => {
          setSurnameInput(e.target.value);
        }}
        value={surnameInput}
      />
      <br />
      <input
        type="text"
        placeholder="Позиция"
        //
        onChange={(e) => {
          setPositionInput(e.target.value);
        }}
        value={positionInput}
      />
      <br />
      <input
        type="text"
        placeholder="Телефон"
        //
        onChange={(e) => {
          setPhoneInput(e.target.value);
        }}
        value={phoneInput}
      />
      <br />
       <input
        type="file"
        placeholder="Телефон"
        //
        onChange={(e) => {
          setPhoneInput(e.target.value);
        }}
        value={phoneInput}
      />

      <button onClick={clickHandler}>Добавить</button>
    </div>
  );
}
