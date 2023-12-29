const domain = 'http://localhost:3000';

export class TransactionController {
    constructor (transactionView, transactionModel) {
      this.transactionView = transactionView;
      this.transactionModel = transactionModel;
    }

    init() {
      this.loadPage();
      this.getExchangeDetails();
      this.payOrCancel();
    }

    async loadPage() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
        
      const requiredTables = ['crypto', 'banks'];

      const promises = requiredTables.map(t => {
        return this.loadData(t);
      });

      promises.push(this.loadData(`transactions?id=${id}`));
  
      const loadedTables = await Promise.all(promises);
  
      requiredTables.forEach(table => {
        const data = loadedTables.find(obj => obj[table])[table];
        this.transactionModel.addData(table, data);
      });

      const { transaction } = loadedTables.find(obj => obj.transaction);
      this.transactionModel.addData('transaction', transaction);
  
      const crypto = this.transactionModel.getData('crypto').find(c => c.id == transaction.crypto_id);
      const bank = this.transactionModel.getData('banks').find(b => b.id == transaction.bank_id);
  
      this.transactionView.displaytMainInfo(transaction, crypto, bank);

      this._blockButtons(transaction.status);
      this.startInProcess(transaction.status);
    }

    getExchangeDetails() {
      $('.get-details').on('click', async () => {
        if (this.transactionModel.getData('details')) return;

        try {
          const transaction = this.transactionModel.getData('transaction');

          const { details } = await this.loadData(`transactions/details?id=${transaction.id}`);

          $('.fields-wrapper').find('.input').text(details);
        } catch (err) {
          console.log(err);
        }
      });
    }

    _blockButtons(status) {
      if (status !== 'Payment expected') {
        $('.controls').find('button').attr('disabled', true);
        $('.get-details').attr('disabled', true);
      }
    }

    async payOrCancel() {
      const controller = this;

      $('.controls').find('.paid-btn, .cancel-btn').on('click', async function () {
        const transaction = controller.transactionModel.getData('transaction');
        if (transaction.status !== 'Payment expected') {
          return;
        }

        try {
          const type = $(this).attr('data-type');
          controller._blockButtons();
          const { transaction: updatedTransaction} = await controller.loadData(`transactions/${type === 'pay' ? 'paid' : 'canceled'}?id=${transaction.id}`);
          controller.transactionModel.addData('transaction', updatedTransaction);
          $('.payment__status').text(updatedTransaction.status);

          if (updatedTransaction.status === 'In process') {
            controller.startInProcess(updatedTransaction.status);
          }
        } catch (err) {
          console.log(err);
        }
      });
    }

    startInProcess(status) {
      if (status === 'In process') {
        this._getTransactionUpdates();
        this._startTimeout();
      }
    }

    _stopInterval() {
      clearInterval(this.getUpdatesInterval);
    }

    _startTimeout() {
      setTimeout(this._stopInterval, 15 * 60 * 1000); 
    }

    _getTransactionUpdates() {
      this.getUpdatesInterval = setInterval(async () => {
        try {
          const transaction = this.transactionModel.getData('transaction');
          const { transaction: data } = await this.loadData(`transactions?id=${transaction.id}`);

          if (data.status === 'Completed') {
            $('.payment__status').text(data.status);
            this._stopInterval();
          }
        } catch (err) {
          console.log(err);
        }
      }, 60 * 1000); 
    }

    async loadData(url) {
      try {
        const data = await fetch(`${domain}/${url}`);
        return data.json();
      } catch (err) {
        console.log(err);
      }
    }
}