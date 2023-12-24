export class HomeView {
    _generateCurrencyItemHtml(crypto, isActive) {
        return `
            <li class="menu__item item" data-id="${crypto.id}" ${isActive ? 'data-active="true"' : ''}>
                <img class="item__logo" src="${crypto.img}" alt="item__logo"/>
                <p class="item__text">${crypto.name}</p>
                <p class="item__text short__text crypto__symbol">${crypto.symbol}</p>
            </li>
        `;
    }

    _generateBankItemHtml(bank, isActive) {
        return `
            <li class="menu__item item" data-id="${bank.id}" ${isActive ? 'data-active="true"' : ''}>
                <img class="item__logo" src="${bank.img}" alt="item__logo"/>
                <p class="item__text">${bank.name}</p>
                <p class="item__text short__text bank__fiat">${bank.fiat}</p>
            </li>
        `;
    }

    createCurrenciesHmtl(cryptoArray) {
        const giveAwayCurrencyList = $('.give-away-section').find('.currency__menu');
        const youReceiveCurrencyList = $('.you-receive-section').find('.currency__menu');
        giveAwayCurrencyList.attr('data-active', true);

        for (let i = 0; i < cryptoArray.length; i++) {
            const cyrpto = cryptoArray[i];
            const currencyItemHtml = this._generateCurrencyItemHtml(cyrpto, i == 0);
            giveAwayCurrencyList.append(currencyItemHtml);
            youReceiveCurrencyList.append(currencyItemHtml);
        }
    }

    createBanksHmtl(bankArray) {
        const giveAwayBanksList = $('.give-away-section').find('.banks__menu');
        const youReceiveBanksList = $('.you-receive-section').find('.banks__menu');
        youReceiveBanksList.attr('data-active', true);

        for (let i = 0; i < bankArray.length; i++) {
            const bank = bankArray[i];
            const bankItemHtml = this._generateBankItemHtml(bank, i == 0);
            giveAwayBanksList.append(bankItemHtml);
            youReceiveBanksList.append(bankItemHtml);
        }
    }
}
