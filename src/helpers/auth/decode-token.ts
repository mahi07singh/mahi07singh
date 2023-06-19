import { decodeToken, isExpired } from "react-jwt";

/**
 * @description This method decodes json web token
 * @param token 
 * @returns
 */
const getDecodedToken = (token: string) => {
    if(!token) {
        return undefined;
    }
    // unset token if expired
    if(isExpired(token)) {
        localStorage.removeItem('authToken');
        return undefined;
    }
    // return valid decoded token
    const decoded: any = decodeToken(token);

    if (!decoded) {
        return undefined;
    }
    return decoded; 
};

export default getDecodedToken;