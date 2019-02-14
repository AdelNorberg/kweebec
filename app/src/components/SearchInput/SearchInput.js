import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const Label = styled.label`
  &::after {
    content: "";
    position: absolute;
    transition: all 0.3s ease;
    right: 18px;
    top: 8px;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z' fill='%2344464B'/%3E%3C/svg%3E%0A");
  }
`;
const Input = styled.input`
  border: none;
  background: #373b3f;
  border-radius: 18px;
  padding: 10px 12px;
  width: 100%;
  color: ${({ theme }) => theme.textSecondary};

  &:focus {
    outline: none;

    &::placeholder {
      color: transparent;
    }
    ~ ${Label}::after {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #44464b;
    font-weight: bold;
    font-size: 13px;
    transition: all 0.3s ease;
  }
`;

const SearchInput = ({ value, onChange }) => {
  return (
    <Wrapper>
      <FormattedMessage
        id="SearchInput.placeholder"
        defaultMessage="Поиск друзей"
      >
        {placeholder => (
          <Input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
          />
        )}
      </FormattedMessage>
      <Label />
    </Wrapper>
  );
};

export default SearchInput;
