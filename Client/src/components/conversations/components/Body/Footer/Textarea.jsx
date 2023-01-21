import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-height: 90px;
  overflow: hidden;
  flex: 2;
  background-color: #EEE;
  border-radius: 23px/23px;
  padding:10px 12px 10px 12px;
`

const TextArea = styled.textarea`
  display: inline-block;
  resize: none;
  overflow-y: hidden;
  line-height: 1.2;
  font-size: .9rem;
  color: black;
  min-width: 100%;
  border: none;
  background-color: transparent;
  font: inherit;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }

`;

const Counter = styled.span`
  width: 25px;
  height: 25px;
  color: #7B7B7B;
  font: inherit;
  font-size: .8rem;
  border-radius: 14px/14px;
  background-color: #D9D9D9;
  padding: 2px 4px;
  font-weight: bold;

`

function _TextArea(props) {
  const [val, setVal] = useState("");
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);

  const onChange = e => {
    setVal(e.target.value);
  };

  return (
    <Container>

      <TextArea
        placeholder="Text message..."
        type="text"
        name="message"
        id="message"
        required
        ref={textAreaRef}
        value={props.values.message}
        onChange={props.handleChange}
        rows={1}></TextArea>
      {val ? <Counter>{val.length} / 140</Counter> : null}
    </Container>
  );
}

export default _TextArea

