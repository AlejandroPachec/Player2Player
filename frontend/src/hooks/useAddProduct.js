import { useState } from 'react';
import { addProductService } from '../service';

function useAddProduct (initialState = {}) {
    const [formData, setFormData] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            const response = await addProductService(formData);
            setIsSubmitting(false);
            setSubmissionError(null);

            return response;
        } catch (error) {
            setIsSubmitting(false);
            setSubmissionError(error.message);
            return null;
        }
    };

    return { formData, isSubmitting, submissionError, handleChange, handleSubmit };
}

export default useAddProduct;
