import { Button, Form } from "react-bootstrap";
// import FormFieldError from "../form-field-error";

const SigninForm = () => {
  return (
    <>
      <Form /*onSubmit={handleSignin}*/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            // disabled={auth.loading ?? "disabled"}
            // placeholder="Enter email"
            // value={values.email}
            // onChange={handleChange("email")}
          />
          {/* <FormFieldError errors={errors} fieldName="email" /> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // disabled={auth.loading ?? "disabled"}
            // placeholder="Password"
            // value={values.password}
            // onChange={handleChange("password")}
          />
          {/* <FormFieldError errors={errors} fieldName="password" /> */}
        </Form.Group>

        <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
          <Button
            type="submit"
            // disabled={auth.loading ?? "disabled"}
            variant="primary"
          >
            Log In
            {/* {auth.loading ?? <Spinner />}
            {auth.loading ? "Logging in..." : "Log In"} */}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default SigninForm;
