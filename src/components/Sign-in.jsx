import React from "react";

function SignInForm() {
  return (
    <div className="sign-in">
      <form action=" method=">
        <fieldset>
          <legend>Sign-In Form</legend>

          <label for="firstname" class="label">
            FirstName :{" "}
          </label>
          <input type="text" name="firstname" id="fname" />
          <div id="error-firstname"></div>

          <label for="lastname" class="label">
            LastName :{" "}
          </label>
          <input type="text" name="lastname" class="lname" />
          <div id="error-lastname"></div>

          <label for="phone" class="label">
            Phone Number :{" "}
          </label>
          <input type="text" name="phone" id="phone" />
          <div id="error-phone"></div>

          <label for="email" class="label">
            Email :{" "}
          </label>
          <input type="email" name="email" id="email" />
          <div id="error-email"></div>

          <label for="password" class="label">
            Password :{" "}
          </label>
          {/* <button id="eye" class="eye">
            <i id="eyeOn" disabled class="fa fa-eye icon"></i>
            <i id="eyeOff" disabled class="fa fa-eye-slash icon"></i>
          </button> */}
          <input type="password" name="password" id="password" />

          <div class="gender">
            <label for="gender" class="label">
              Gender :{" "}
            </label>
            <input type="radio" name="gender" value="Male" id="radio2" />
            <label for="gender" class="label">
              Male{" "}
            </label>
            <input type="radio" name="gender" value="Female" id="radio3" />
            <label for="gender" class="label">
              Female{" "}
            </label>
          </div>

          <div class="agree-terms">
            <input type="checkbox" name="terms" checked />
            <label for="terms" class="label">
              Agree with all the terms and conditions{" "}
            </label>
            <br />
            <br />
          </div>

          <button id="submit" type="submit">
            SignUp
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignInForm;
