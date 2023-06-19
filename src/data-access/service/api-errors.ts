import { IError } from "../../interfaces/user/error";

/**
 * @description This method parse api error into client errors. 
 * @param apiErrors
 * @returns
 */
export const processInputErrors = (apiErrors: any): IError[] => {
    const errors: IError[] = [];
    const apiErrorIndex = apiErrors?.error?.findIndex((i:any) => i._id==='input');

    apiErrors = Object.entries(apiErrors.errors[apiErrorIndex].fields);
    if(apiErrors.length) {
        apiErrors.forEach((e: string) => {
            errors.push({
                field: e[0],
                message: e[1]
            })
        });
    }
    return errors;
}