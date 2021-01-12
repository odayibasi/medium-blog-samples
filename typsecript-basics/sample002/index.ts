{
    let myName = 'Onur';
    let mySchool = false;
    let myAge = 39;


    let user = {
        name: 'ozgur',
        age: '12',
        height: 170,
        hasSchool: true,
    }

    let userName = user.name;
    const { age, height } = user;
    let users = ['onur', 'ozgur'];

    const names = users.map((el, index) => `${el.toUpperCase()}${index}`);

    function mapNames(el: string, index: number) {
        return `${el.toUpperCase()}${index}`
    }
    const nameUpperCase = users.map(mapNames);

}







