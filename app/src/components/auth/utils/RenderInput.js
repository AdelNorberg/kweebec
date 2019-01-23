import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 17px;
`;

const LabelStyles = styled.label`
  display: inline-block;
  text-align: center;
  font-size: 18px;
  font-weight: 500;

  input {
    margin-top: 10px;
  }
`;

const InputStyles = styled.input`
  outline: none;
  display: block;
  width: 400px;
  color: #44464b;
  font-weight: 500;
  font-size: 19px;
  padding: 13px 0;
  border: 1px solid #44464b;
  background: none;
  border-radius: 30px;
  text-align: center;
  transition: all 0.6s ease;

  &:focus::placeholder {
    color: transparent;
    transition: 0.6s ease;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    border-color: ${props => props.theme.textSecondary};
  }

  &.input-error {
    border-color: #f82332;

    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }
`;

const RenderInput = ({ label, placeholder, input, type, meta }) => (
  <Wrapper>
    <LabelStyles>
      {label}
      <InputStyles
        type={type}
        placeholder={placeholder}
        {...input}
        autoComplete="off"
        className={
          !meta.valid && meta.touched && !meta.active ? "input-error" : ""
        }
      />
    </LabelStyles>
  </Wrapper>
);

export default RenderInput;
