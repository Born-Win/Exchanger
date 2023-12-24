import banksInputs from '../bank-inputs.json';
const domain = 'http://localhost:3000';

const BanksFields = {
  'Privat Bank UAH': ['Enter your e-mail', 'Card number'],
  'Monobank UAH': ['Enter your e-mail', 'Card number'],
  'Raiffeisen Bank UAH': ['Enter your e-mail', 'Card number'],
  'PUMB UAH': ['Enter your e-mail', 'Card number'],
  'A-Bank UAH': ['Enter your e-mail', 'Card number'],
  'Sense Bank UAH': ['Enter your e-mail', 'Card number'],
  'Oschadbank UAH': ['Enter your e-mail', 'Card number'],
  'UkrSibBank UAH': ['Enter your e-mail', 'Card number'],
  'Izibank UAH': ['Enter your e-mail', 'Card number'],
  'NeoBank UAH': ['Enter your e-mail', 'Card number'],
  'OTP Bank UAH': ['Enter your e-mail', 'Card number'],

  'Kaspi Bank KZT': ['Enter your e-mail', 'Card number', 'Full name'],
  'Halyk Bank KZT': ['Enter your e-mail', 'Card number', 'Full name'],
  'Jusan Bank KZT': [
    'Enter your e-mail',
    'Card number',
    'Full name',
    'Phone number linked to account'
  ],

  'Forte Bank KZT': ['Enter your e-mail', 'Card number', 'Full name'],
  'Bereke Bank KZT': ['Enter your e-mail', 'Card number', 'Full name'],
  'Humo UZS': ['Enter your e-mail', 'Card number', 'Full name'],
  'Uzcard UZS': ['Enter your e-mail', 'Card number', 'Full name'],

  'Card UAH': ['Enter your e-mail', 'Card number'],
  'Card USD': [
    'Enter your e-mail',
    'Card number',
    'Full name',
    'Country (Expect USA, Russia and Belarus)'
  ],
  'Card EUR': [
    'Enter your e-mail',
    'Card number',
    'Full name',
    'Country (Expect USA, Russia and Belarus)',
    'IBAN'
  ],
  'Card KZT': [
    'Enter your e-mail',
    'Card number',
    'Full name',
    'Phone number(Altyn Bank)'
  ],
  'Card UZS': ['Enter your e-mail', 'Card number', 'Full name'],
  'Card GBP': [
    'Enter your e-mail',
    'Account number',
    'Reference for payment(optional)',
    'Full name or company name',
    'Sort Code'
  ],
  'Card TRY': [
    'Enter your e-mail',
    'IBAN',
    'Full name or company name',
    'Bank name'
  ],
  'Card GEL': [
    'Enter your e-mail',
    'IBAN',
    'Full name or company name',
    'Bank name'
  ],
  'Card PLN': [
    'Enter your e-mail',
    'IBAN',
    'Full name or company name',
    'Bank name'
  ],
  'Card CNY': [
    'Enter your e-mail',
    'Card number',
    'Full name or company name',
    'Bank name'
  ],
  'Card INR': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name',
    'IFSC Code'
  ],
  'Card NGN': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name'
  ],
  'Wise USD': ['Enter your e-mail', 'Wise Email (enabled to receive payments)'],
  'Wise EUR': ['Enter your e-mail', 'Wise Email (enabled to receive payments)'],
  'Payoneer USD': ['Enter your e-mail', 'Payoneer email'],
  'SWIFT USD': [
    'Enter your e-mail',
    'IBAN or Account Number',
    'Reference for payment(optional)',
    'Country',
    'City, address, postal code',
    'Full name or company name',
    'ACH/ABA Number (for USA)',
    'SWIFT/BIC code'
  ],
  'SEPA EUR': [
    'Enter your e-mail',
    'IBAN or Account Number',
    'Reference for payment(optional)',
    'Full name or company name'
  ],
  'Skrill USD': ['Enter your e-mail', 'Skrill account'],
  'Skrill EUR': ['Enter your e-mail', 'Skrill account'],
  'EasyPaisa PKR': [
    'Enter your e-mail',
    'EasyPaisa Account Number',
    'Full name'
  ],
  'Bank Transfer UAH': [
    'Enter your e-mail',
    'IBAN',
    'Reference for payment(optional)',
    'Full name or company name',
    'EDRPOU or RNOKPP'
  ],
  'Bank Transfer EUR': [
    'Enter your e-mail',
    'IBAN',
    'Reference for payment(optional)',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer AED': [
    'Enter your e-mail',
    'IBAN',
    'Reference for payment(optional)',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer GBP': [
    'Enter your e-mail',
    'Account number',
    'Reference for payment(optional)',
    'Full name or company name',
    'Sort Code'
  ],
  'Bank Transfer THB': [
    'Enter your e-mail',
    'Account number',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer TRY': [
    'Enter your e-mail',
    'IBAN',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer GEL': [
    'Enter your e-mail',
    'IBAN',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer PLN': [
    'Enter your e-mail',
    'IBAN',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer CNY': [
    'Enter your e-mail',
    'Card number or account number',
    'Full name or company name',
    'Bank name'
  ],
  'Bank Transfer PKR': ['Enter your e-mail', 'IBAN', 'Full name', 'Bank name'],
  'Bank Transfer NGN': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name'
  ],
  'Bank Transfer IDR': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name'
  ],
  'Bank Transfer INR': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name',
    'IFSC Code'
  ],
  'Bank Transfer HKD': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name'
  ],
  'Bank Transfer JPY': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name'
  ],
  'Bank Transfer VND': [
    'Enter your e-mail',
    'IBAN or account number',
    'Full name',
    'Bank name'
  ],
  'Alipay CNY': [
    'Enter your e-mail',
    'Alipay Account',
    'Full name or company name'
  ],
  'UnionPay CNY': [
    'Enter your e-mail',
    'Card number',
    'Full name or company name',
    'Bank name'
  ],
  'WeChat CNY': ['Enter your e-mail', 'WeChat Account']
};

export class HomeController {
  constructor(homeView, homeModel) {
    this.homeView = homeView;
    this.homeModel = homeModel;
  }

  init() {
    this.loadPage();
    this.openBanksOrCryptoMenu();
    this.getRateByInterval();
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

    this._setChosenBankAndCrypto();
    this.chooseBankOrCrypto();
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
    return this.loadData(`rates?crypto=${crypto}&fiat=${fiat}`);
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

        controller._checkSameMenuType(butName, sectionId);
        controller._setChosenBankAndCrypto();
      });
  }

  _checkSameMenuType(menuName, sectionId) {
    const menuList = $('.section')
      .not(`[data-id='${sectionId}']`)
      .find(`.menu__list[data-menu-name='${menuName}']`);
    if (menuList.attr('data-active')) {
      menuList.parents('.menu').attr('data-block', true);
    }
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

    this._setChosenPair();
  }

  _setChosenPair() {
    const cryptoId = $('.currency__info[data-type="crypto"]').attr('data-id');
    const bankId = $('.currency__info[data-type="banks"]').attr('data-id');

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

    $('.exchange-rate__value').find('.from-value').text(`1 ${chosenSymbol}`);
    $('.exchange-rate__value').find('.to-value').text(`${fiatSymbol}`);
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
      controller.addActivePair(
        currencyInfo.attr('data-type'),
        currencyInfo.attr('data-id')
      );
      controller._setChosenItemInfo(currencyInfo, $(this));
      controller._setChosenPair();
      if (currencyInfo.attr('data-type') === 'banks') {
        const bankName = $(this).find('.item__text:first').text();
        controller.addAditionalFields(bankName);
        controller.changeInputImg(
          currencyInfo.find('.currency__icon').attr('src')
        );
      }
    });
  }

  addAditionalFields(bankName) {
    this.homeView._generateInputsHTML(banksInputs[bankName]);
  }

  changeInputImg(url) {
    this.homeView.changeInputImgHtml(url);
  }

  addActivePair(type, id) {
    if (type === 'crypto') {
      this.homeModel.addData('active_pair', { crypto: id });
    }
    if (type === 'banks') {
      this.homeModel.addData('active_pair', { fiat: id });
    }
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

  getRateByInterval() {
    let count = 15;

    setInterval(async () => {
      if (count === 0) {
        const { crypto, fiat } = this.homeModel.getData('active_pair');
        await this.getExchangeRate(crypto, fiat);
        count = 15;
      }

      const angle = 360 - (count - 1) * (360 / 15);
      this.homeView.changeProgressBarHtml(angle);

      $('.timer__value').text(count--);
    }, 1000);
  }
}
