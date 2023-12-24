const string = `Privat Bank UAH
Monobank UAH
PUMB UAH
A-Bank UAH
Sense Bank UAH
Oschadbank UAH
UkrSibBank UAH
Izibank UAH
NeoBank UAH
OTP Bank UAH
Kaspi Bank KZT
Halyk Bank KZT
Jusan Bank KZT
Forte Bank KZT
Bereke Bank KZT
Card UAH
Card USD
Card EUR
Card KZT
Card GBP
Card TRY
Card GEL
Card PLN
Card CNY
Card INR
Card NGN
Wise USD
Wise EUR
Payoneer USD
SWIFT USD
SEPA EUR
Skrill USD
Skrill EUR
EasyPaisa PKR
Bank transfer UAH
Bank transfer EUR
Bank transfer AED
Bank transfer GBP
Bank transfer TRY
Bank transfer GEL
Bank transfer PLN
Bank transfer CNY
Bank transfer PKR
Bank transfer NGN
Bank transfer INR
Bank transfer JPY
Alipay CNY
UnionPay CNY
WeChat CNY`;

console.log(new Set(string.split('\n').map(e => e.split(' ').at(-1))));