import styled from "styled-components";
import { BiggerButton } from "../../components/buttons";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email && password) {
      fetch("https://happy-thoughts-zcsh.onrender.com/sessions", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/thoughts");
        } else {
          alert("Login failed.");
        }
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
          <Logo src="./assets/heart.png" alt="Happy Heart logo" />
          <h2>Welcome</h2>
          <p>It’s great to see you.</p>
        </div>

        <form onSubmit={handleLogin}>
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
            
              <BiggerButton type="submit">Log In</BiggerButton>
          </fieldset>
        </form>
        <p>Don’t have an account? <NavSignUp to={"/signUp"}>Get started.</NavSignUp></p>
      </Box>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 30px;


  p {
  color: gray;
  }

    @media (min-width: 640px) {
    margin-top: 80px;
  }
`;

const Box = styled.div`
  height: 480px;
  width: 320px;
  text-align: center;
  /* background-color: #f3f3f3;
  border: solid 1px black;
  border-radius: 4px; */
  display: flex;
  flex-direction: column;


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

const Logo = styled.img `
height: 150px;
`

const InputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 12px;
`;

const NavSignUp = styled(Link) `
color: #353535;
`

const NavLogIn = styled(Link) `
color: gray; 
text-decoration: none;
`
