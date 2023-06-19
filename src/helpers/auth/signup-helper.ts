import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IError } from "../../interfaces/user/error";
import { ISignupFormProps } from "../../interfaces/account/signup";
import { signup } from "../../data-access/api/auth-api";
import { processInputErrors } from "../../data-access/service/api-errors";

const signupFormProps : ISignupFormProps = {
    name:'',
    email:'',
    password: ''
}
export const SignupHelper = () => {
    // form submition true
    const [isSubmitted, setIsSubmitted] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const account = useSelector((state:any) => ({...state.account}));

    const dispatch = useDispatch();
    // form values
    const [values, setValues] = useState<ISignupFormProps>(signupFormProps);
    // form errors
    const [errors, setErrors] = useState<IError[]>(account.errors);
    // handling signup
    const handleSignup = async(e: any) => {
        e.preventDefault();
        // validate form
        setErrors(validate(values));

        setIsProcessing(true);
        // set sumbmitted
        if(!errors?.length) {
            setIsSubmitted(true);
        }
    }

    // checking if form values getting updated
    const handleChange = (prop: any) => (event: any)  => {
        setValues({...values,[prop]:event.target.value})
    }
    // validating form fields
    const validate = (values: ISignupFormProps) => {
        const errors:IError[]= [];
        // eslint-disable-next-line eqeqeq
        if(values.name == '') {
            errors.push({
                field: 'name',
                message: 'Please provide a name.'
            });
        }

        // eslint-disable-next-line eqeqeq
        if (values.email == '') {
            errors.push({
                field: 'email',
                message: 'Please provide an email.'
            });
        }

        // eslint-disable-next-line eqeqeq
        if(values.password == '') {
            errors.push({
            field: 'password',
            message: 'Please provide password.'
            });
        }
        return errors;
    }

    useEffect(() => {
        if(isSubmitted) {
            // reset form if the response is success
            dispatch(signup(values));
        }
    }, [dispatch, isSubmitted, values]);

    useEffect(() => {
        if(account.errors) {
            setErrors(processInputErrors(account.errors));
        }
    }, [account.errors])
    
  return {
    handleSignup,
    handleChange,
    values,
    errors,
    account
  }
};