
let counter = 0;
const getData = () => {
    console.log("Call API", counter++);
};

const debounce = (fn, d) => {
    let timer;
    return function() {
        let context = this
            args = arguments;
        clearTimeout(timer);    
        timer = setTimeout(()=> {
            fn.apply(context, args)
        }, d)    
    }
};

const handleDebounce = debounce(getData, 300)