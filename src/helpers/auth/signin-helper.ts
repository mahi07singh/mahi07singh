export const SigninHelper = () => {
    return{
        
    }
}

// import { useEffect, useState } from "react";
// import { ISigninFormProps } from "../../interfaces/account/signin";
// import { IError } from "../../interfaces/user/error";
// import { ResponseType } from "../../interfaces/user/response";
// import { useDispatch, useSelector } from "react-redux";
// import { signin } from "../../data-access/api/auth-api";

// const signinFormProps: ISigninFormProps = {
//     email:'',
//     password:''
// }
// export const SigninHelper = () => {
//     // form submition status
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     // error handling
//     const [errors, setErrors] = useState<IError[]>([])
//     // checking if the form is in process
//     const auth = useSelector((state: any) => ({...state.auth}));

//     const dispatch = useDispatch();
//     // form values
//     const [values, setValues] = useState<ISigninFormProps>(signinFormProps)
    
//     // handling signin
//     const handleSignin = async(e: any) => {
//         e.preventDefault();
//         // validate form
//         setErrors(validate(values));

//         // set Submitted
//         setIsSubmitted(true);
//     }
//     // checking if form values getting updated
//     const handleChange = (prop: any) => (event: any) => {
//         setValues({...values,[prop]:event.target.value})
//     }
//     // validating form fields 
//     const validate = (values: ISigninFormProps) => {
//         const errors :IError[] = [];
//         // eslint-disable-next-line eqeqeq
//         if(values.email == '') {
//             errors.push({
//                 field: 'email',
//                 message:'Please provide a valid email.'
//             });
//         }
//         // eslint-disable-next-line eqeqeq
//         if(values.password == '') {
//             errors.push({
//                 field: 'password',
//                 message:'Please provide password.'
//             });
//         }
//         return errors;
//     }

//     useEffect(() => {
//         // eslint-disable-next-line eqeqeq
//         if(errors.length==0 && isSubmitted) {
//             dispatch(signin(values));
//             if(auth.status===ResponseType.Success) {
//                 setValues(signinFormProps);
//             }
//         }
//         return;
//     }, [auth.status, dispatch, errors, isSubmitted, values]);
    
//     return {
//         handleSignin,
//         handleChange,
//         errors,
//         values,
//         auth,
//     }
// }