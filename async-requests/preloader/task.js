class Request{
    constructor(url){
    this.loader = document.getElementById('loader')
    this.items = document.getElementById('items')
    this.url = url
    let xhr = this.getXhr(this.url)
    this.changeXhr(xhr)
}

getXhr(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', this.url);
    xhr.send();
    return xhr;
}

changeXhr(xhr){
xhr.onreadystatechange = () =>{
    if (xhr.readyState === 4) {
        this.loader.classList.remove('loader_active');
        let json = JSON.parse(xhr.response);
        let currency = json.response.Valute;
        console.log(currency)
        for (let index in currency) {
            this.createElement(currency[index].CharCode, currency[index].Value, currency[index].Name);
        }
    }
}
}

createElement(code, value, name) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    const itemName = document.createElement('div');
    itemName.classList.add('item__currency');

    itemCode.textContent = code;
    itemValue.textContent = value;
    itemName.textContent = name;

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemName);
    this.items.appendChild(item);
}
}

let course = new Request('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
