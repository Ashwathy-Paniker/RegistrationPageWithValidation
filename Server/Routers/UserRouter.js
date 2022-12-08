const router = require('express').Router()
const usercontroller = require('../Controllers/UserController')
const express = require('express');
const path = require('path')
const { check, validationResult } = require('express-validator');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/adduser',
   [check('fname').isLength({ min: 4 }).isAlpha().withMessage('Character only accepted '),
    check('lname').isLength({ min: 4 }).isAlphanumeric().withMessage('Character only accepted'),
    check('email').isEmail().withMessage('Enter Valid Email'),
    check('password').isLength({ min: 8 }).notEmpty().withMessage('Enter Valid password'),
    check('mobile').isMobilePhone('en-IN').withMessage('Enter valid mobile no'),
], usercontroller.register)


module.exports = router