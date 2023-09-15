const getPool = require('../../db/connectDB');
const deletePhoto = require('../../helpers/deletePhoto');
const generateError = require('../../helpers/generateError');
const savePhoto = require('../../helpers/savePhoto');
const editUserSchema = require('../../schema/editUserSchema');

async function editUser (req, res, next) {
    try {
        const { error } = editUserSchema.validate(req.body);
        if (error) {
            return next(generateError(error.message, 400));
        }
        const userId = req.user.id;
        const { firstName, lastName, bio, password, email, phone, city, postalCode } = req.body;
        let avatar;

        if (!firstName && !lastName && !bio && !password && !email && !phone && !city && !postalCode && !req.files.avatar) {
            throw generateError('Debes modificar algún campo', 400);
        }

        const pool = await getPool();

        const [user] = await pool.query('SELECT avatar from users WHERE id = ?', [userId]);

        if (req.files?.avatar) {
            console.log(user[0].avatar);
            if (user[0].avatar) {
                await deletePhoto(user[0].avatar);
            };
            avatar = await savePhoto(req.files.avatar, 150);
        }

        await pool.query(`UPDATE users
            SET first_name = COALESCE(?, first_name),
            last_name = COALESCE(?, last_name),
            bio = COALESCE(?, bio),
            password = COALESCE(?, password),
            email = COALESCE(?, email),
            phone_number = COALESCE(?, phone_number),
            city = COALESCE(?, city),
            postal_code = COALESCE(?, postal_code),
            avatar = ?
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
            avatar,
            userId
        ]);

        const [[updatedUser]] = await pool.query('SELECT first_name, last_name, bio, password, email, phone_number, city, postal_code, avatar FROM users WHERE id = ?', [userId]);

        res.status(200).send({
            status: 'Ok',
            message: 'El perfil fue editado correctamente!',
            data: {
                updatedUser
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports = editUser;
