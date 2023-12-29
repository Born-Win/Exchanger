import '../../css/transactions/index.css';
import { TransactionController } from './controller';
import { TransactionView } from './view';
import { TransactionModel } from './model';

$(document).ready(function () {
  const transactionView = new TransactionView();
  const transactionModel = new TransactionModel();

  const transactionController = new TransactionController(transactionView, transactionModel);
  transactionController.init();
});