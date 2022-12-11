import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  FormContainer3,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Form } from "formik";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <FormContainer3>
      <label for="batch"><BoldLink>Select your batch:</BoldLink></label>
        <select id="batch" name="batch">
          <option value="em">Batch 1 : 6:00 - 7:00 AM</option>
          <option value="sb">Batch 2 : 7:00 - 8:00 AM</option>
          <option value="tb">Batch 3 : 8:00 - 9:00 AM</option>
          <option value="eb">Batch 4 : 5:00 - 6:00 PM</option>
        </select>
      </FormContainer3>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
