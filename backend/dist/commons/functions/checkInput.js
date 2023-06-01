"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmail = void 0;
const checkEmail = (email) => {
    const reg_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    return reg_email.test(email);
};
exports.checkEmail = checkEmail;
//# sourceMappingURL=checkInput.js.map