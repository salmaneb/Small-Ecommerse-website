import * as Yup from 'yup';
export const userSchema=Yup.object({
    name:Yup.string().min(2).max(6).required('Enter Name'),
    email:Yup.string().email().required('Enter Email'),
});