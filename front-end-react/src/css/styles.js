import styled from "styled-components";

// INÍCIO ESTILO DOS FORMULÁRIOS.
const Form = styled.div`
  color: #000;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: #000;
  display: block;
`;

const Input = styled.input`
  padding: 0.5em;
  color: #000;
  background: #b4e4e2;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Button = styled.button`
  background: ${props => (props.primary ? "#5bc4bf" : "white")};
  color: ${props => (props.primary ? "black" : "palevioletred")}
  font-size: 1em;
  margin: 1em;
  margin-left: 0px;
  padding: 0.25em 1em;
  border: 2px solid 5bc4bf;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: #b4e4e2;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 0px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
// FIM ESTILO DOS FORMULÁRIOS.
export { Form, Label, Input, Button, Select };
