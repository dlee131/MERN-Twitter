const { check } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

const validateTweetInput = [
    check('text')
    .exists({ checkFalsy: true })
    .isLength({ min: 10, max: 200 })
    .withMessage( 'Tweet must be between 10 and 200 characters'),
    handleValidationErrors
];

module.exports = validateTweetInput;
