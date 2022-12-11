import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const FormContainer2 = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const FormContainer3 = styled.form`
  width: 100%;
  display: flex;
  font-size: 10px;
  flex-direction: column;
  padding: 0em 1em;
  box-shadow: 0px 0px 2px rgba(15, 15, 15, 0.19);
`;

export const FormContainer4 = styled.form`
  width: 100%;
  display: flex;
  font-size: 10px;
  padding: 7px;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: darkgrey;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(250, 80, 80);
  font-weight: 500;
  text-decoration: none;
  margin: 0 2px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 15px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 9px;

  &::placeholder {
    color: darkgrey;
  }

  &:not(:last-of-type) {
    border-bottom: 1.75px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(290, 100, 50, 2) 20%,
    rgba(190, 50, 90, 1) 100%
  );

  &:hover {
    filter: brightness(1.13);
  }
`;
export const SubmitButton2 = styled.button`
  width: 15%;
  padding: 4px ;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  border: none;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(20, 150, 90, 2) 20%,
    rgba(20, 150, 90, 2) 100%
  );

  &:hover {
    filter: brightness(1.13);
  }
`;

