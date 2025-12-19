import axios from 'axios';
import React, { useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';

function ModalWindow({
  condidate,
  share,
  show,
  setShow,
  handleClose,
  name,
  surname,
  phone,
  position,
}) {
  const [selectedStage, setSelectedStage] = useState();
  const handleSelect = (stage) => {
    setSelectedStage(stage);
  };
  const sendDataHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .put(`/api/clientscard/${condidate?.id}`, { ...data, stageId: selectedStage })
      .then((response) => console.log(response.data))
      .then(setShow(false));
  };
  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{`Форма для ${share}`}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={sendDataHandler}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" name="name">
              <h4>{`Имя - ${condidate?.name || name}`}</h4>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" name="surname">
              <h4>{`Фамилия - ${condidate?.surname || surname}`}</h4>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h4>{`Должность - ${condidate?.position || position}`}</h4>
              <Form.Control type="text" placeholder="Изменить должность" name="position" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h4>{`Телефон - ${condidate?.phone || phone}`}</h4>
              <Form.Control
                type="text"
                placeholder="Изменить номер телефона"
                name="phone"
                autoFocus
              />
            </Form.Group>
            {condidate && (
              <>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <h4>{`Этап - ${condidate?.Stages?.at(-1).title}`}</h4>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" name="Stages">
                      {!selectedStage ? 'Изменить' : selectedStage}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleSelect('Новые')}>Новые</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Письмо')}>Письмо</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Звонок')}>Звонок</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Интервью')}>
                        Интервью
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Оффер')}>Оффер</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('В штате')}>В штате</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSelect('Отказ')}>Отказ</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <h4>{`История этапов - ${condidate?.Stages?.map((stage) => stage.title).join(
                    ',',
                  )}`}</h4>
                </Form.Group>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" type="submit">
              Сохранить изменения
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalWindow;
