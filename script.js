const countries = {
    "Afeganistão": "Afegane (AFN)",
    "África do Sul": "Rand (ZAR)",
    "Albânia": "Lek (ALL)",
    "Alemanha": "Euro (EUR)",
    "Andorra": "Euro (EUR)",
    "Angola": "Kwanza (AOA)",
    "Argentina": "Peso Argentino (ARS)",
    "Austrália": "Dólar Australiano (AUD)",
    "Brasil": "Real (BRL)",
    "Canadá": "Dólar Canadense (CAD)",
    "Chile": "Peso Chileno (CLP)",
    "China": "Yuan Renminbi (CNY)",
    "Colômbia": "Peso Colombiano (COP)",
    "Egito": "Libra Egípcia (EGP)",
    "Emirados Árabes Unidos": "Dirham (AED)",
    "Espanha": "Euro (EUR)",
    "Estados Unidos": "Dólar Americano (USD)",
    "França": "Euro (EUR)",
    "Índia": "Rupia Indiana (INR)",
    "Japão": "Iene (JPY)",
    "México": "Peso Mexicano (MXN)",
    "Portugal": "Euro (EUR)",
    "Reino Unido": "Libra Esterlina (GBP)",
    "Rússia": "Rublo (RUB)",
    "Suíça": "Franco Suíço (CHF)"
    // Adicione mais países e moedas conforme necessário
};

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('country');
    for (const country in countries) {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    }
});

function showCurrency() {
    const country = document.getElementById('country').value;
    const currency = countries[country] || '';
    document.getElementById('result').innerText = currency ? `A moeda do ${country} é ${currency}.` : '';
}
