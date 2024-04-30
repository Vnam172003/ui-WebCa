import http from "./Api";

export const registerAccount = (body) => http.post("/user/register", body);

export const LoginAccount = (body) => http.post("/user/login", body);
export const VerifyAccount = (body) => http.post("/user/verify-email", body);
