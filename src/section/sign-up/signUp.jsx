import styled from "styled-components";
import { BiggerButton } from "../../components/buttons";
import { Link } from "react-router";

export const SignUp = () => {
  return (
    <Wrapper>
      <Box>
        <div>
          <h2>Sign up to get started</h2>
        </div>

        <form action="">
          <fieldset>
            <InputGroup>
              <label>
                <p>Email</p>
                <StyledInput type="text" placeholder="you@example.com" />
              </label>
            </InputGroup>

            <InputGroup>
              <label>
                <p>Full Name</p>
                <StyledInput type="password" placeholder="John Doe" />
              </label>
            </InputGroup>

            <InputGroup>
              <label>
                <p>Password</p>
                <StyledInput type="password" placeholder="password" />
              </label>
            </InputGroup>

            
              <NavLogIn to={"/thoughts"}>
              <BiggerButton type="submit">Sign up</BiggerButton>
              </NavLogIn>
          </fieldset>
        </form>
        <p><small>By signing up, you agree to our Terms of Service and Privacy Policy.</small></p>
        <p>Already have an account? <NavSignUp to={"/"}>Log in.</NavSignUp></p>
      </Box>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;  
  width: 100dvw;   

  p {
  color: gray;
  }
`;

const Box = styled.div`
  height: 620px;
  width: 320px;
  background-color: #f3f3f3;
  text-align: center;
  border: solid 1px black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 640px) {
    width: 620px;
  }

  fieldset {
    padding: 20px 40px;
    border: none;
  }

  label {
    width: 100%;
    text-align: left;
  }

  button {
    width: 100%;
    background-color: pink;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
`;

const NavSignUp = styled(Link) `
color: #353535;
`

const NavLogIn = styled(Link) `
color: gray; 
text-decoration: none;
`
