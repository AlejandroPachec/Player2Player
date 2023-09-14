// const getPool = require('../../db/connectDB');
// const addUserReviewSchema = require('../../schema/addUserReviewSchema');
// const Joi = require('joi');
// const generateError = require('../../helpers/generateError');

// async function addUserReview(req, res) {
//   try {
//     const userId = req.params.userId; // Get the user ID from the request parameters
//     const { productId, title, text, stars } = req.body;

//     // Validate the review data using the Joi schema
//     const { error } = reviewSchema.validate({ productId, title, text, stars });

//     if (error) {
//       // Use the generateError function to create a custom error object
//       throw generateError(error.details[0].message, 400);
//     }

//     // Check if the user has purchased the product
//     const userHasPurchased = await checkUserPurchase(userId, productId);

//     if (!userHasPurchased) {
//       // Use the generateError function to create a custom error object
//       throw generateError('User has not purchased the product.', 403);
//     }

//     // If the user has purchased the product, you can insert the review into the database
//     const reviewId = generateUniqueId(); // Generate a unique review ID
//     const result = await pool.query(
//       'INSERT INTO reviews (id, title, text, stars, product_id, user_buyer_id) VALUES (?, ?, ?, ?, ?, ?)',
//       [reviewId, title, text, stars, productId, userId]
//     );

//     res.status(201).json({ message: 'Review posted successfully.' });
//   } catch (error) {
//     console.error(error);

//     // Handle custom errors created using the generateError function
//     if (error.statusCode) {
//       res.status(error.statusCode).json({ error: error.message });
//     } else {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// }