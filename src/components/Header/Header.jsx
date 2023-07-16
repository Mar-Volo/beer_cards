// import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { HeaderBox } from "./Header.styled";
import { Container } from "../Layout/Layout.styled";
import { Logo } from "./Header.styled";
import { Form } from "./Header.styled";
import { Input } from "./Header.styled";
import { FormButton } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderBox>
      <Container className="header__container">
        <Logo>Beer</Logo>
        <Form>
          <Input
            placeholder="Some beer"
            type="text"
            autoComplete="off"
            autoFocus
          />
          <FormButton type="submit">
            <ImSearch size={20} />
          </FormButton>
        </Form>
      </Container>
    </HeaderBox>
  );
};

// onSubmit={handleSubmit}
// onChange={handleChange}
//           value={searchQuery}
