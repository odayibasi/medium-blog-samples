export const opsMeta = ['+', '-', '*', '/'];
export const CalcMachine = () => {
    let result = '';

    //Math Part=========
    const sumReducer = (acc, value) => acc + value;
    const mulReducer = (acc, value) => acc * value;
    const divReducer = (acc, value) => acc / value;
    const subReducer = (acc, value) => acc - value;

    const sum = (args) => args.reduce(sumReducer);
    const mul = (args) => args.reduce(mulReducer);
    const div = (args) => args.reduce(divReducer);
    const sub = (args) => args.reduce(subReducer);


    //API Part=========
    const push = (val) => {
        const op = isOpExist();
        if (op && opsMeta.includes(val)) {
            result = doCalculation(op);
        }
        result += val;
        return result;
    }

    const reset = () => {
        result = '';
        return result
    }

    const calc = () => {
        const op = isOpExist();
        result = doCalculation(op);
        return result;
    }


    //Operation Part=========
    const isOpExist = () => {
        let flag = false;
        opsMeta.forEach(el => {
            if (result.includes(el)) flag = el;
        });
        return flag;
    }


    const doCalculation = (op) => {
        if (op) {
            const arr = result.split(op);
            const arrInt = arr.map(el => parseInt(el));
            switch (op) {
                case '+':
                    return sum(arrInt) + '';
                case '-':
                    return sub(arrInt) + '';
                case '*':
                    return mul(arrInt) + '';
                case '/':
                    return div(arrInt) + '';
                default:
                    return '';
            }
        }
    }


    return {push: push, reset: reset, calc: calc}
}
