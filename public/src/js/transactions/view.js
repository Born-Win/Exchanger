export class TransactionView {
    displaytMainInfo(transaction, crypto, bank) {
        console.log(transaction, crypto, bank);
        $('.payment__number').text(`№${transaction.id}`);
        $('.payment__status').text(transaction.status);
        let sendingAmount, gettingAmount, sendingImgSrc, gettingImgSrc, sendingAdditional, gettingAdditional;

        if (transaction.crypto_to_bank) {
            sendingAmount = `${transaction.crypto_amount} ${crypto.symbol}`;
            gettingAmount = `${transaction.fiat_amount} ${bank.fiat}`;
            sendingAdditional = `${crypto.name} ${crypto.symbol}`
            gettingAdditional = `${bank.name} ${bank.fiat}`;
            sendingImgSrc = crypto.img;
            gettingImgSrc = bank.img;
        } else {
            sendingAmount = `${transaction.fiat_amount} ${bank.fiat}`;
            gettingAmount = `${transaction.crypto_amount} ${crypto.symbol}`;
            sendingAdditional = `${bank.name} ${bank.fiat}`
            gettingAdditional = `${crypto.name} ${crypto.symbol}`;
            sendingImgSrc = bank.img;
            gettingImgSrc = crypto.img;
        }
        $('.you-are-sending__amount').text(sendingAmount)
        $('.you-are-sending__additional').text(sendingAdditional);
        $('.you-are-sending__logo').attr('src', sendingImgSrc);
        $('.you-are-getting__amount').text(gettingAmount);
        $('.you-are-getting__additional').text(gettingAdditional);
        $('.you-are-getting__logo').attr('src', gettingImgSrc);
    }
}