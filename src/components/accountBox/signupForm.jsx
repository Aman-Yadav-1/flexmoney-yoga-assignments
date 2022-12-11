import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  FormContainer2,
  FormContainer3,
  FormContainer4,
  Input,
  MutedLink,
  SubmitButton,
  SubmitButton2,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="phone" placeholder="Phone" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <FormContainer2>
        <Input type="number" placeholder="Enter Age" min="18" max="65"/>
      </FormContainer2>
      
      <FormContainer3>
      <label for="batch"><BoldLink>Session Timings:</BoldLink></label>
        <select id="batch" name="batch">
          <option value="em">Batch 1 : 6:00 - 7:00 AM</option>
          <option value="sb">Batch 2 : 7:00 - 8:00 AM</option>
          <option value="tb">Batch 3 : 8:00 - 9:00 AM</option>
          <option value="eb">Batch 4 : 5:00 - 6:00 PM</option>
        </select>
      </FormContainer3>
      <br></br>
      <FormContainer4>
      <label for="fee">Fee : INR 500/month</label>
      <SubmitButton2 id="submit2" type="submit2">Pay</SubmitButton2>
      </FormContainer4>
      
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
