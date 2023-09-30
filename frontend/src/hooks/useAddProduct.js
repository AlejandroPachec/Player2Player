import { useState, useEffect } from 'react';
import { addProductService } from '../service';


function useAddProduct (token, data) {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        const handleSubmit = async () => {
            setIsSubmitting(true);

            try {
                const response = await addProductService(token, data);
                setIsSubmitting(false);
                setSubmissionError(null);

                return response;
            } catch (error) {
                setIsSubmitting(false);
                setSubmissionError(error.message);
                return null;
            }
        };
        handleSubmit();
    }, [data, token]);

    return { formData, isSubmitting, submissionError, handleChange };
}

export default useAddProduct;
