// import { useState, useEffect } from 'react';
// import editUserService from '../service/editUserService';

// const useEditUser = (token, formData) => {
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const editUser = async () => {
//             try {
//                 setLoading(true);
//                 const response = await editUserService(token, formData);

//                 const data = await response.json();

//                 if (!response.ok) {
//                     throw new Error(data.error);
//                 }

//                 setUser(data.data.updatedUser);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         editUser();

//     }, []);
// };
