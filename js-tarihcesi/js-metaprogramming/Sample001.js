const user = {
    firstName: 'Onur',
    lastName: 'Dayibasi',
    webPage: 'https://onurdayibasi.com',
}

const handler = {
    get(target, property) {
        console.log(`Property ${property} has been read.`);
        return target[property];
    }
}

let proxy = new Proxy(user, handler);

console.log(proxy.webPage)