import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import phrases from "../databases/phrases";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const MainPage = () => {
  const [phrase, setPhrase] = useState(phrases[0]);
  const handleButton = () => {
    let randNum = getRandomInt(1, phrases.length);
    while (randNum === phrase.id) {
      randNum = getRandomInt(1, phrases.length);
    }
    setPhrase(phrases.find((el) => el.id === randNum));
  };

  return (
    <Modal.Dialog>
      {phrase === undefined ? (
        <Modal.Title>Cargando...</Modal.Title>
      ) : (
        <>
          <Modal.Header>
            <Modal.Title>{phrase.phrase}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={"d-flex justify-content-end"}>
            <p>{phrase.author}.</p>
          </Modal.Body>
        </>
      )}

      <Modal.Footer>
        <Button onClick={handleButton} variant="primary">
          Próxima frase
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default MainPage;
