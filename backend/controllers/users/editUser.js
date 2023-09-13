const getPool = require('../../db/connectDB');
const generateError = require('../../helpers/generateError');
const editUserSchema = require('../../schema/editUserSchema');


async function editUser (req, res, next) {
    try {
        const { userId } = req.params;
        const { error } = editUserSchema.validate(req.body);
        if (error) {
            return next(generateError(error.details[0].message, 400));
        }

        const { firstName, lastName, bio, password, email, phone, city, postalCode } = req.body;

        const pool = await getPool();

        await pool.query(`UPDATE users
            SET first_name = COALESCE(?, first_name),
            last_name = COALESCE(?, last_name),
            bio = COALESCE(?, bio),
            password = COALESCE(?, password),
            email = COALESCE(?, email),
            phone_number = COALESCE(?, phone_number),
            city = COALESCE(?, city),
            postal_code = COALESCE(?, postal_code)
            WHERE id = ?
        `, [
            firstName,
            lastName,
            bio,
            password,
            email,
            phone,
            city,
            postalCode,
            userId
        ]);

        const [[editedUser]] = await pool.query('SELECT first_name, last_name, bio, password, email, phone_number, city, postal_code FROM users WHERE id = ?', [userId]);

        res.status(200).send({
            status: 'ok',
            message: 'El perfil fue editado correctamente!',
            data: editedUser
        });
    } catch (error) {
        next(error);
    }
}

module.exports = editUser;
