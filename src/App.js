import React, { useState } from "react";

import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";

import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross, setisCross] = useState(false);
  const [winMessage, setwinMessage] = useState("");

  const reloadGame = () => {
    setisCross(false);
    setwinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      return setwinMessage(`${itemArray[0]}`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      return setwinMessage(`${itemArray[3]}`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      return setwinMessage(`${itemArray[6]}`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      return setwinMessage(`${itemArray[0]}`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      return setwinMessage(`${itemArray[4]}`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      return setwinMessage(`${itemArray[2]}`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      return setwinMessage(`${itemArray[4]}`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      return setwinMessage(`${itemArray[2]}`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      if (isCross) {
        itemArray[itemNumber] = "cross";
      } else {
        itemArray[itemNumber] = "circle";
      }

      setisCross(!isCross);
    } else {
      return toast("Alredy filled", { type: "error" });
    }

    checkIsWinner();
  };

  const displayWinMsg = (winnigMessage) => {
    if (winnigMessage) {
      return (
        <div className="mydiv">
          <h1 className="winmsg text-uppercase text-center">
            {winMessage} won{" "}
          </h1>
          <Button color="success" className="mybtn" block onClick={reloadGame}>
            Reload Game
          </Button>
        </div>
      );
    } else {
      return (
        <div className="mydiv">
          <h1 className=" turnmsg  text-uppercase text-center mb-20  animated zoomInDown 2s">
            {isCross ? "cross" : "circles"} turns
          </h1>
        </div>
      );
    }
  };

  // document.getElementsByClassName("myclick").onClick(() => {
  //   document
  //     .getElementsByClassName("myclick")
  //     .classList.add("animated bounce 2s");
  // });

  return (
    <Container>
      <ToastContainer position="bottom-center"></ToastContainer>
      <Row>
        <Col md={6} style={{ margin: "0 auto" }}>
          {displayWinMsg(winMessage)}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                onClick={() => {
                  changeItem(index);
                }}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
