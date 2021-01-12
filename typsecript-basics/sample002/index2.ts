{

    let myName: string = 'Onur';
    let mySchool: boolean = false;
    let myAge: number = 39;

    let user: {
        name: string,
        age: number,
        hasSchool: boolean,
    } = {
        name: 'ozgur',
        age: 12,
        hasSchool: true,
    }

    let users: string[] = ['onur', 'ozgur'];
    let users2: Array<string> = ['onur', 'ozgur'];



    function sum(a: number, b: number) {
        return a + b;
    }
    const result = sum(2, 3);

    function sumIsOdd(a: number, b: number): boolean {
        return (a + b) % 1 === 1;
    }

    async function getUsers(): Promise<string[]> {
        const response = await fetch("https://myweb.com/users");
        const userS: string[] = await response.json();
        return userS;
    }


    function logUpperOrLowerCase(str: string, flagUpperCase: boolean = false) {
        if (flagUpperCase) {
            return str.toUpperCase()
        } else {
            return str.toLowerCase();
        }
    }

    console.log(logUpperOrLowerCase('selam'));


    function logUpperCase(...users: string[]) {
        users.forEach(user => console.log(user.toUpperCase()))
    }

}