let invoices = [
    {
        "numerFaktury": "123",
        "dataWystawienia": "2023-12-27",
        "sprzedawca": "Sprzedawca Sp. z o.o.",
        "nabywca": "Nabywca Sp. z o.o.",
        "produkty": [
            {
                "nazwa": "Produkt 1",
                "ilosc": 2,
                "cena": 100.00
            },
            {
                "nazwa": "Produkt 2",
                "ilosc": 1,
                "cena": 50.00
            }
        ]
    },
    // Możesz dodać więcej faktur do tablicy
];

function generateInvoiceXML(invoice) {
    let xml = `
<faktura numer="${invoice.numerFaktury}" data="${invoice.dataWystawienia}">
\t<sprzedawca>${invoice.sprzedawca}</sprzedawca>
\t<nabywca>${invoice.nabywca}</nabywca>
\t<produkty>`;

    for (let product of invoice.produkty) {
        xml += `\n\t\t<produkt nazwa="${encodeURIComponent(product.nazwa)}" ilosc="${product.ilosc}" cena="${product.cena}"></produkt>`;
    }

    xml += `
\t</produkty>
</faktura>`;

    return xml;
}

for (let invoice of invoices) {
    let invoiceXML = generateInvoiceXML(invoice);
    console.log(invoiceXML);
}
