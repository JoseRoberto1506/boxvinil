import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faebd7;
  font-family: "Poppins", sans-serif;

  h1 {
    margin-bottom: -0.25rem;
    font-size: 2.5rem;
  }
`;

export const Navbar = styled.nav`
  width: 260px;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #00d000;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 1rem;
  &:hover {
    background-color: #000000;
    cursor: pointer;
    transition: background 0.5s ease-out;
  }
`;

export const Section = styled.main`
  width: 100%;
  text-align: center;
`;

export const Product = styled.div`
  width: 100%;
  border-top: dashed 1px;
  margin-top: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
