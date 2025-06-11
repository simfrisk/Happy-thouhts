import styled from "styled-components";
import { BiggerButton } from "../../components/buttons";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, name, password } = formData;

    if (email && name && password) {
      fetch("https://happy-thoughts-zcsh.onrender.com/users", {
        method: "POST",
        body: JSON.stringify({ email, name, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFormData({ email: "", name: "", password: "" });
          navigate("/");
        })
        .catch((err) => {
          console.error("Failed to post to API:", err);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Wrapper>
      <Box>
        <div>
          <h2>Sign up to get started</h2>
        </div>

        <form onSubmit={handleSignUp}>
          <fieldset>
            <InputGroup>
              <label>
                <p>Email</p>
                <StyledInput
                  type="text"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </InputGroup>

            <InputGroup>
              <label>
                <p>Full Name</p>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </InputGroup>

            <InputGroup>
              <label>
                <p>Password</p>
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
            </InputGroup>

            <BiggerButton type="submit">Sign up</BiggerButton>
          </fieldset>
        </form>

        <p>
          <small>By signing up, you agree to our Terms of Service and Privacy Policy.</small>
        </p>
        <p>
          Already have an account? <NavSignUp to="/">Log in.</NavSignUp>
        </p>
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

  @media (min-width: 640px) {
    h2 {
      margin-bottom: 40px;
    }
  }
`;

const Box = styled.div`
  height: 620px;
  width: 320px;
  text-align: center;
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
    height: 40px;
    margin-top: 25px;
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

const NavSignUp = styled(Link)`
  color: #353535;
`;

const NavLogIn = styled(Link)`
  color: gray;
  text-decoration: none;
`;