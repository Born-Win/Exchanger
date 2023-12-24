const domain = 'http://localhost:3000';

export class HomeController {
    constructor(homeView, homeModel) {
        this.homeView = homeView;
        this.homeModel = homeModel;
    }

    init() {
        this.loadPage();
        this.openBanksOrCryptoMenu();
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
            const data = await fetch(`${domain}/${url}`, {
            });
            return data.json();
        } catch (err) {
            console.log(err);
        }
    }

    async getExchangeRate(crypto, fiat) {
        this.loadData('rates')
    }

    openBanksOrCryptoMenu() {
        const controller = this;

        $('.menu').find('.nav__item').on('click', function() {
            const butName = $(this).attr('data-but-name');
            $('.menu').removeAttr('data-block');
            $(this).parent().find('.nav__item').removeAttr('data-active data-block');
            $(this).attr('data-active', true);
            $(this).parents('.menu').find('.menu__list').removeAttr('data-active');
            $(this).parents('.menu').find(`.menu__list[data-menu-name='${butName}']`).attr('data-active', true);

            const sectionId = $(this).parents('.section').attr('data-id');

            controller._checkSameMenuType(butName, sectionId);
            controller._setChosenBankAndCrypto();
        });
    }

    _checkSameMenuType(menuName, sectionId) {
        const menuList = $('.section').not(`[data-id='${sectionId}']`).find(`.menu__list[data-menu-name='${menuName}']`);
        if (menuList.attr('data-active')) {
            menuList.parents('.menu').attr('data-block', true);
        }
    }

    _setChosenBankAndCrypto() {
        const controller = this;

        $('.section').each(function() {
            const activeItem = $(this).find('.menu__list[data-active="true"]').find('.menu__item.item[data-active="true"]');
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
        currencyInfo.find('.currency__title').text(activeItem.find('.short__text').text());
        currencyInfo.find('.currency__icon').attr('src', activeItem.find('.item__logo').attr('src'));
    }

    chooseBankOrCrypto() {
        const controller = this;

        $('.menu__item.item').on('click', function() {
            $(this).parent().find('.menu__item.item').removeAttr('data-active');
            $(this).attr('data-active', true);
            const currencyInfo = $(this).parents('.section').find('.currency__info');
            controller._setChosenItemInfo(currencyInfo, $(this));
            controller._setChosenPair();
        });
    }

    onClickChat() {
        const closeIcon = $(".chat-icon-close");
        const messageIcon = $(".chat-icon-message");
      
        $(".chat-icon").on("click", () => {
          const chat = $(".chat");
          const isOpen = chat.attr("data-open");
    
          if (isOpen === "true") {
            closeIcon.hide();
            messageIcon.show();
            chat.attr("data-open", false);
          } else {
            closeIcon.show();
            messageIcon.hide();
            chat.attr("data-open", true);
          }
        });
    }
}
