

import validator from 'express-validator';
import validate from '../middlewares/validate';
import Account from '../models/Account';
import User from '../models/User';
import { sendSuccessfulTransfer } from '../utils/sendMail';
import Transactions from '../models/Transaction';

/**
   *
   *
   * @returns
   * @class Account
   */
class Accounts {
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns
   * @memberof Account
   */
  getBalance(req, res) {
    validate.validateGetBalance(req, res);
    let errors = req.validationErrors();
    if (errors) {
      res.send(errors);
    } else {
      const { id, accountNumber } = req.body;
      User.findOne({ accountNumber, id }, (err, account) => {
        if (err) {
          return res.send('internal server error');
        }
        if (!account) {
          return res.send('no account found');
        }
        return res.status(200).json({
          status: 200,
          account
        });
      });
    }
  }

  /**
   *
   *
   * @param {any} amount
   * @memberof Account
   * @return { void }
   */
  deposite(req, res) {
    validate.validateDeposite(req, res);
    let errors = req.validationErrors();
    if (errors) {
      res.send(errors);
    } else {
      const {
        username, accountNumber, amount, transactionType, detail, sender, referenceNo, date
      } = req.body;
      const userName = username.toLowerCase();
      User.findOne({ 'local.username': username }, (err, result) => {
        if (err) return res.send(err);
        if (!result) {
          req.flash('adminMessage', 'User does not exist');
          res.redirect('/admin/dashboard');
          return;
        }
        const cash = result.local.balance + Number(amount);
        User.update({ 'local.username': userName }, { $set: { 'local.balance': cash } }, (err, updated) => {
          if (err) {
            req.flash('adminMessage', err.message);
            res.redirect('/admin/dashboard');
          } else {
            let newTransaction = new Transactions(
              {
                accountNumber,
                detail,
                sender,
                amount,
                referenceNo,
                username,
                transactionType,
                date
              }
);
            newTransaction.save((err) => {
              if (err) {
                req.flash('adminMessage', 'Deposite was unsuccessful')
                res.redirect('/admin/dashboard');
                
              } else {
                req.flash('adminMessage', 'Deposite made successfully');
                res.redirect('/admin/dashboard');
              }
            });
          }
        });
      });
    }
  }


  /**
    *
    *
    * @param {any} amount
    * @memberof Account
    */
  transfer(req, res) {
    const userId = req.decoded.id;
    const {
      balance,
      email,
      receiverBank,
      receiverName,
      receiverAccountNumber,
      swiftCode,
      ibanNumber,
      amountToTransfer,
      transferDescription
    } = req.body;
    if (!receiverBank && !receiverName && !receiverAccountNumber
      && !swiftCode && !ibanNumber && !amountToTransfer && !email
      && !transferDescription, !userId) {
      return res.status(400).send({
        message: 'Please provide missing fields'
      });
    }
    User.findOne({
      _id: userId,
    }).then((userFound) => {
      if (userFound) {
        if (userFound.isActive === false) {
          return res.status(404).send({
            message: 'Token Unavailable'
          });
        }
        if (Number(userFound.balance) < Number(amountToTransfer)) {
          return res.status(400).send({
            message: 'Insufficient fund'
          });
        }
        const updateBal = {
          $set: {
            balance: Number(userFound.balance) - Number(amountToTransfer)
          },
        };
        User.findByIdAndUpdate(req.decoded.id, updateBal, { new: true })
          .then((updatedDetails) => {
            if (updatedDetails) {
              const account = new Account({
                email: email.trim().toLowerCase(),
                receiverBank: receiverBank.trim().toLowerCase(),
                receiverName: receiverName.trim().toLowerCase(),
                receiverAccountNumber: receiverAccountNumber.trim().toLowerCase(),
                swiftCode: swiftCode.trim().toLowerCase(),
                ibanNumber: ibanNumber.trim().toLowerCase(),
                amountToTransfer: amountToTransfer.trim().toLowerCase(),
                transferDescription: transferDescription.trim().toLowerCase(),
                transactionType: 'debit',
                userId
              });
              account.save().then((transferSuccess) => {
                sendSuccessfulTransfer(
                  transferSuccess.email,
                  transferSuccess.receiverBank,
                  transferSuccess.receiverName, transferSuccess.receiverAccountNumber,
                  transferSuccess.amountToTransfer, userFound.balance, userFound.username
                );
                if (transferSuccess) {
                  res.status(201).send({
                    message: 'Transfer successful',
                    transferSuccess
                  });
                }
              });
            }
          });
      }
    }).catch((err) => {
      res.state(500).send({
        err
      });
    });
  }
}
module.exports = new Accounts();
