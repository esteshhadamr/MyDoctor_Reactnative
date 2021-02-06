export const SaveUser = (req, res) => {
    req.checkBody('name')
        .notEmpty()
        .withMessage('الأسم مطلوب');

    req.checkBody('email')
        .notEmpty()
        .withMessage('البريد الألكتروني مطلوب');

    req.checkBody('email')
        .isEmail()
        .withMessage('صيغة البريد الألكتروني غير صحيحة');

    req.checkBody('password')
        .notEmpty()
        .withMessage('كلمة المرور مطلوبة');

    req.checkBody('userType')
        .notEmpty()
        .withMessage('نوع المستخدم مطلوب');


};