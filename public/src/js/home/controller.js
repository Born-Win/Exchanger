import { v4 as uuidv4 } from 'uuid';

const domain = 'http://localhost:3000';

export class HomeController {
  constructor(homeView, homeModel) {
    this.homeView = homeView;
    this.homeModel = homeModel;
  }

  init() {
    this.loadPage();
    this.openBanksOrCryptoMenu();
    this.makeTransaction();
    this.inputCryptoOrFiatAmount();
    // this.getRateByInterval();
  }

  async loadPage() {
    const requiredTables = ['crypto', 'banks'];

    const promises = [];

    for (const table of requiredTables) {
      if (!this.homeModel.getData(table)) {
        const pr = this.loadData(table);
        promises.push(pr);
      }
    }

    if (!promises.length) {
      return;
    }

    const loadedTables = await Promise.all(promises);

    requiredTables.forEach(table => {
      const data = loadedTables.find(obj => obj[table])[table];
      this.homeModel.addData(table, data);

      if (table === 'crypto') {
        return this.homeView.createCurrenciesHmtl(data);
      }

      if (table === 'banks') {
        return this.homeView.createBanksHmtl(data);
      }
    });

    const bank = this.homeModel.getData('banks')[0];
    const crypto = this.homeModel.getData('crypto')[0];
    
    await this.getExchangeRate(
      crypto.id,
      bank.fiat_id
    );

    this.homeModel.addData('reserves', { crypto: crypto.reserve, bank: bank.reserve });

    this._setChosenBankAndCrypto();
    this.chooseBankOrCrypto();
    this._addAditionalFields(bank.id, crypto.id, 'banks');
    this._changeReserveInfo();

    if (!window.localStorage.getItem('userId')) {
        const userId = uuidv4();
        window.localStorage.setItem('userId', userId);
    }
  }

  async loadData(url) {
    try {
      const data = await fetch(`${domain}/${url}`, {});
      return data.json();
    } catch (err) {
      console.log(err);
    }
  }

  async getExchangeRate(crypto, fiat) {
    try {
      const { rate } = await this.loadData(`rates?crypto=${crypto}&fiat=${fiat}`);
      this.homeModel.addData('rate', rate);
      this._changeRateInfo();
    } catch (err) {
        console.log(err);
    }
  }

  async getReserves() {
    const bankId = +$('.inputs-list').attr('data-bank-id');
    const cryptoId = +this.homeModel.getData('active_pair').crypto;

    const bankPr = this.loadData(`banks/one?id=${bankId}`)
    const cryptoPr = this.loadData(`crypto/one?id=${cryptoId}`)

    const loadedReserves = await Promise.all([bankPr, cryptoPr]);

    const reserves = {};
    loadedReserves.forEach(r => {
      if (r.crypto) reserves.crypto = r.crypto.reserve;
      if (r.bank) reserves.bank = r.bank.reserve;
    });

    this.homeModel.addData('reserves', reserves);
    this._changeReserveInfo();
  }

  openBanksOrCryptoMenu() {
    const controller = this;

    $('.menu')
      .find('.nav__item')
      .on('click', function () {
        const butName = $(this).attr('data-but-name');
        $('.menu').removeAttr('data-block');
        $(this)
          .parent()
          .find('.nav__item')
          .removeAttr('data-active data-block');
        $(this).attr('data-active', true);
        $(this).parents('.menu').find('.menu__list').removeAttr('data-active');
        $(this)
          .parents('.menu')
          .find(`.menu__list[data-menu-name='${butName}']`)
          .attr('data-active', true);

        const sectionId = $(this).parents('.section').attr('data-id');

        if (!controller._checkSameMenuType(butName, sectionId)) {
          controller._setChosenBankAndCrypto();
        }
      });
  }

  _checkSameMenuType(menuName, sectionId) {
    const menuList = $('.section')
      .not(`[data-id='${sectionId}']`)
      .find(`.menu__list[data-menu-name='${menuName}']`);
    if (menuList.attr('data-active')) {
      menuList.parents('.menu').attr('data-block', true);
      return true;
    }
    return false;
  }

  _setChosenBankAndCrypto() {
    const controller = this;

    $('.section').each(function () {
      const activeItem = $(this)
        .find('.menu__list[data-active="true"]')
        .find('.menu__item.item[data-active="true"]');

      const currencyInfo = $(this).find('.currency__info');
      controller._setChosenItemInfo(currencyInfo, activeItem);
    });

    $('.curency__field').val('');

    this._setChosenPair();

    const bankId = $('.currency__info[data-type="banks"').attr('data-id');
    this._setBankId(bankId);

    if ($('.you-receive-section').find('.nav__item[data-active="true"]').attr('data-but-name') === 'banks') {
      this._addAditionalFields(bankId, null, 'banks');
    } else {
      const cryptoId = $('.currency__info[data-type="crypto"').attr('data-id');
      this._addAditionalFields(bankId, cryptoId, 'crypto');
    }
  }

  _setChosenPair() {
    const cryptoId = $('.currency__info[data-type="crypto"]').attr('data-id');
    const bankId = $('.currency__info[data-type="banks"]').attr('data-id');

    if (!cryptoId || !bankId) return;

    const banksData = this.homeModel.getData('banks');
    const cryptoData = this.homeModel.getData('crypto');

    const chosenBank = banksData.find(b => b.id == bankId);
    const chosenCrypto = cryptoData.find(c => c.id == cryptoId);

    if (!chosenBank || !chosenCrypto) {
      return alert('Please choose crypto and bank again');
    }

    const fiatId = chosenBank.fiat_id + '';
    const fiatSymbol = chosenBank.fiat;
    const chosenSymbol = chosenCrypto.symbol;

    this.homeModel.addData('active_pair', { crypto: cryptoId, fiat: fiatId });

    const rate = this.homeModel.getData('rate') || '';

    $('.exchange-rate__value').find('.from-value').text(`1 ${chosenSymbol}`);
    $('.exchange-rate__value').find('.to-value').find('.current__rate').text(rate);
    $('.exchange-rate__value').find('.to-value').find('.current__fiat').text(fiatSymbol);
  }

  _setChosenItemInfo(currencyInfo, activeItem) {
    currencyInfo.attr('data-type', activeItem.parent().attr('data-menu-name'));
    currencyInfo.attr('data-id', activeItem.attr('data-id'));
    currencyInfo
      .find('.currency__title')
      .text(activeItem.find('.short__text').text());
    currencyInfo
      .find('.currency__icon')
      .attr('src', activeItem.find('.item__logo').attr('src'));
  }

  chooseBankOrCrypto() {
    const controller = this;

    $('.menu__item.item').on('click', function () {
      $(this).parent().find('.menu__item.item').removeAttr('data-active');
      $(this).attr('data-active', true);
      const currencyInfo = $(this).parents('.section').find('.currency__info');
      controller._setChosenItemInfo(currencyInfo, $(this));
      controller._setChosenPair();

      const type = currencyInfo.attr('data-type')

      const youReceive = $(this).parents('.section').attr('data-id') === 'you-receive';
      
      if (type === 'banks') {
        const bankId = $(this).attr('data-id');
        if (youReceive) {
          controller._addAditionalFields(bankId, null, type);
        } else {
          controller._setBankId(bankId);
        }
      } else if (type === 'crypto' && youReceive) {
        const bankId = $('.currency__info[data-type="banks"').attr('data-id');
        const cryptoId = $(this).attr('data-id');
        controller._addAditionalFields(bankId, cryptoId, type);
      }

      const { fiat, crypto } = controller.homeModel.getData('active_pair');
      if (!fiat || !crypto) return;
      controller.getExchangeRate(crypto, fiat);
      controller.getReserves();

      $(this).parents('.section').find('.curency__field').trigger('input');
    });
  }

  _changeRateInfo() {
    $('.exchange-rate').find('.to-value').find('.current__rate').text(this.homeModel.getData('rate'));
  }

  _changeReserveInfo() {
    const { crypto, bank } = this.homeModel.getData('reserves');
    $('.currency__info[data-type="crypto"]').parents('.currency-wrapper').find('.reserve__value').text(crypto);
    $('.currency__info[data-type="banks"]').parents('.currency-wrapper').find('.reserve__value').text(bank);
  }

  _addAditionalFields(bankId, cryptoId, type) {
    let details, img;

    if (type === 'banks') {
      const bank = this.homeModel.getData('banks').find(b => b.id == bankId) || {};
     
      if (!bank.details) {
        return alert('Please choose crypto and bank again');
      }

      details = bank.details;
      img = bank.img;
    } else {
      const crypto = this.homeModel.getData('crypto').find(c => c.id == cryptoId) || {};
      details = ['Enter your e-mail', 'Wallet'];
      img = crypto.img;
    }

    this.homeView.generateInputsHTML(details);

    this._changeInputImg(img);
    this._setBankId(bankId);
  }

  _setBankId(bankId) {
    $('.inputs-list').attr('data-bank-id', bankId);
  }

  _changeInputImg(url) {
    this.homeView.changeInputImgHtml(url);
  }

  onClickChat() {
    const closeIcon = $('.chat-icon-close');
    const messageIcon = $('.chat-icon-message');

    $('.chat-icon').on('click', () => {
      const chat = $('.chat');
      const isOpen = chat.attr('data-open');

      if (isOpen === 'true') {
        closeIcon.hide();
        messageIcon.show();
        chat.attr('data-open', false);
      } else {
        closeIcon.show();
        messageIcon.hide();
        chat.attr('data-open', true);
      }
    });
  }

  inputCryptoOrFiatAmount() {
    const controller = this;
 
    $('.curency__field').on('input', function () {
      const value = $(this).val();
      const id = $(this).attr('data-id');

      if (!value) {
        return controller._clearInput(id);
      }

      const type = $(this).parent().find('.currency__info').attr('data-type');
      const rate = controller.homeModel.getData('rate');

      let amount = type === 'banks' ? value / rate : value * rate;

      amount = +amount.toFixed(6);

      $('.curency__field').not(`[data-id="${id}"]`).val(amount);
    });
  }

  _clearInput(id) {
    $('.curency__field').not(`[data-id="${id}"]`).val('');
  }

  makeTransaction() {
    $('.go-payment-button').on('click', async () => {
        const bankId = +$('.inputs-list').attr('data-bank-id');
        const cryptoId = +this.homeModel.getData('active_pair').crypto;
        const bank = this.homeModel.getData('banks').find(b => b.id == bankId);

        if (!bank) {
          return alert('Please choose crypto and bank again');
        }

        const chosenDetails = {};

        $('.input-wrapper').find('.input-field').each(function () {
          const type = $(this).attr('data-type');
          const value = $(this).val();
          if (!value) return;
          chosenDetails[type] = value;
        });

        if (Object.keys(chosenDetails).length !== bank.details.length) {
          return alert("You need fill in all required fields");
        }

        const cryptoInput = $('.currency__info[data-type="crypto"]').parent().find('.curency__field');
        const bankInput = $('.currency__info[data-type="banks"]').parent().find('.curency__field');

        if (!cryptoInput[0] || !bankInput[0]) {
          return alert('Such transaction is not allowed');
        }

        const cryptoAmount = +cryptoInput.val();
        const fiatAmount = +bankInput.val();

        if (!cryptoAmount || cryptoAmount < 0) {
          return alert('Crypto amount should be specified and be greater 0');
        }
        if (!fiatAmount || fiatAmount < 0) {
          return alert('Fiat amount should be specified and be greater 0');
        }

        const cryptoData = this.homeModel.getData('crypto').find(c => c.id == cryptoId);

        if (cryptoAmount < cryptoAmount.min_exchange) {
          return alert(`Min exchange amount for this crypto: ${cryptoData.min_exchange}. Please choose greater amount`);
        }

        const rate = this.homeModel.getData('rate');
       
        const userId = window.localStorage.getItem('userId');

        if (!userId) {
          return alert('An error occurred, please reload the page');
        }

        const body = {
          user_id: userId,
          bank_id: bankId,
          crypto_id: cryptoId,
          details: chosenDetails,
          rate,
          crypto_amount: cryptoAmount,
          fiat_amount: fiatAmount
        }

        if (cryptoInput.parents('.give-away-section')[0]) {
          body.crypto_to_bank = true;
        } else {
          body.bank_to_crypto = true;
        }

        const result = await this.sendPostRequest('transactions', body);
        if (result.id) {
          window.location.href = `/transactions?id=${result.id}`;
        }
    });
  }

  async sendPostRequest(url, body) {
    try {
      const data = await fetch(`${domain}/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return data.json();
    } catch (err) {
      console.log(err);
    }
  }

  getRateByInterval() {
    let count = 15;

    setInterval(async () => {
      if (count === 0) {
        const { crypto, fiat } = this.homeModel.getData('active_pair');

        this.getExchangeRate(crypto, fiat);
        this.getReserves();

        count = 15;
      }

      const angle = 360 - (count - 1) * (360 / 15);
      this.homeView.changeProgressBarHtml(angle);

      $('.timer__value').text(count--);
    }, 1000);
  }
}
