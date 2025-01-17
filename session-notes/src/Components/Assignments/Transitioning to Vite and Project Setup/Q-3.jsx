import React, { useState } from 'react';

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        rating: '',
        comments: '',
        recommend: false,
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { rating, comments } = formData;

        if (!rating || !comments) {
            setError('Please provide a rating and comments.');
            return;
        }

        setError('');
        setSubmittedData(formData);
        setFormData({
            rating: '',
            comments: '',
            recommend: false,
        });
    };

    return (
        <div className='form-container'>

            <form onSubmit={handleSubmit}>
                <h2>User Feedback Form</h2>
                <div><strong>Rating: </strong>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star}>
                            <input
                                type="radio"
                                name="rating"
                                value={star}
                                checked={formData.rating === String(star)}
                                onChange={handleChange}
                            />
                            {star}
                        </label>
                    ))}
                </div>

                <label htmlFor="comments"><strong>Comments: </strong>  </label>
                <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    required
                ></textarea>

                <label>
                    <input
                        type="checkbox"
                        name="recommend"
                        checked={formData.recommend}
                        onChange={handleChange}
                    />
                    Would you recommend this product?
                </label>
                <div>
                    <input type="submit" value="Submit Feedback"></input>

                </div>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {submittedData && (
                <div className='card'>
                    <h2>Feedback Submitted</h2>
                    <p><strong>Rating:</strong> {submittedData.rating} Star{submittedData.rating > 1 ? 's' : ''}</p>
                    <p><strong>Comments:</strong> {submittedData.comments}</p>
                    <p><strong>Recommendation:</strong> {submittedData.recommend ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
}


