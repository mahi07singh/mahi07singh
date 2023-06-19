import { Alert, Button, Form } from "react-bootstrap";
import { SignupHelper } from "../../helpers/auth/signup-helper";
import { ResponseType } from "../../interfaces/user/response";
import FormFieldError from "../form-field-error";

const SignupForm = () => {
    const {
        values, 
        errors,
        account,
        handleSignup,
        handleChange
    } = SignupHelper();
  return (
    <>
      <Form className="row g-3 needs-validation" onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            // disabled={account.loading?? 'disabled'}
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Enter full name"
          />
          <FormFieldError errors={errors} fieldName="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            // disabled={account.loading ?? "disabled"}
            value={values.email}
            onChange={handleChange("email")}
            placeholder="Enter email"
          />
          <FormFieldError errors={errors} fieldName="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // disabled={account.loading ?? "disabled"}
            value={values.password}
            onChange={handleChange("password")}
            type="password"
            placeholder="Password"
          />
          <FormFieldError errors={errors} fieldName="password" />  
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
          <Button
            type="submit"
            // disabled={account.loading ?? "disabled"}
            variant="primary"
          >
            {account.loading ? "processing" : "Ragister Now"}
          </Button>
        </Form.Group>

        {account.status === ResponseType.Success ?? (
          <Alert variant="success">{account.message}</Alert>
        )}
      </Form>
    </>
  );
};

export default SignupForm;
