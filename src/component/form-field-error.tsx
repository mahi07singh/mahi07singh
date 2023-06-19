import React, { useEffect, useState } from 'react'
import { IError } from '../interfaces/user/error';
import { Form } from 'react-bootstrap';

const FormFieldError = (props: any) => {
    const {errors, fieldName} = props;
    const [isField, setField] = useState<boolean>(false);
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        setField(false);
        setMessage('');
        if(errors?.length) {
            // eslint-disable-next-line array-callback-return
            errors.find((obj:IError) => {
                // eslint-disable-next-line eqeqeq
                if(fieldName == obj.field){
                    setField(true);
                    setMessage(obj.message);
                }
            })
        }
    }, [errors,fieldName,setField,setMessage]);
  return (
    <>
      { isField ? <Form.Text className="invalid-feedback">{message}</Form.Text> : ''}
    </>
  )
}

export default FormFieldError;
