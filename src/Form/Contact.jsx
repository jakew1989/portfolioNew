import React from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 500px;
  margin-bottom: 20px;
  .field {
    /* padding: 20px; */
    /* margin: 20px;
     */
    margin-bottom: 20px;
  }

  .button1 {
    transition: transform 250ms ease-out;
    margin-top: 10px;
    width: 120px;
    height: 40px;
    /* margin-bottom: 40px; */
  }

  .button1:hover {
    transition: transform 250ms ease-in;
    transform: scale(1.04);
  }

  .input1,
  .input2 {
    transition: transform 250ms ease-in;
    width: 500px;
    margin-bottom: 20px;
    color: white;
  }

  .input1 {
    background: rgba(102, 98, 171, 0.5);
    border: 3px solid rgba(102, 98, 171, 0.1);
    /* border-radius: 3px; */
  }
  .input1:focus {
    transform: scale(5);
    transition: transform 250ms ease-in;
    color: white;
  }

  #message::placeholder {
    color: white;
  }
  #message {
    color: white;
  }
  .title-container {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4rem;
    color: #fff;
    margin-bottom: 30px;
    width: 500px;
    padding-bottom: 40px;
    margin-top: 200px;
  }
  @media screen and (max-width: 768px) {
    .title-container {
      font-size: 2.5rem;
    }
    .input1,
    .input2 {
      transition: transform 250ms ease-in;
      width: 50vw;
      margin-bottom: 20px;
      color: white;
    }
  }
  .input {
    background: rgba(102, 98, 171, 0.5);
  }
  .span {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .span:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
  img {
    filter: blur(2px);
    z-index: -1;
    width: 100vw;
    height: 500px;
  }
`;

function Contact() {
  return (
    <Div className="contact">
      <>
        <div className="title-container">
          <h1>
            <div className="span">C</div>
            <div className="span">o</div>
            <div className="span">n</div>
            <div className="span">t</div>
            <div className="span">a</div>
            <div className="span">c</div>
            <div className="span">t</div>&nbsp;
            <div className="span">m</div>
            <div className="span">e</div>
          </h1>
        </div>

        <form action="/contact" method="post" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <div class="field">
            <div class="field-half">
              <Input
                className="field"
                type="text"
                name="name"
                id="name"
                variant="filled"
                className="input1"
                required
                placeholder="Name"
              />
            </div>
            <div class="field field-half">
              <Input
                type="email"
                required
                name="email"
                className="input1"
                id="email"
                placeholder="Email"
                variant="filled"
              />
            </div>
            <div class="field field">
              <TextField
                required
                name="message"
                id="message"
                className="input2"
                multiline
                placeholder="Message"
                variant="filled"
                rows={7}
              />
              <div data-netlify-recaptcha="true" className="field"></div>
              <Button
                className="button1"
                style={{ background: "white" }}
                variant="containted"
                type="submit"
              >
                Submit&nbsp; ^_^
              </Button>
            </div>
          </div>
        </form>
      </>
    </Div>
  );
}

export default Contact;
