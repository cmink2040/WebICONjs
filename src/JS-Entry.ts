import data from '../data'


interface Types {
    [key: string]: any;
}

const dat: Types =  data;

const fetchData = async () => {
    const data = await import('../data');
    console.log(data, " DATA FILE IMPORTED");

    return data;
};

function print_data() {
    console.log(dat, " is the data")
    console.log(dat.data["url"], "is the URL")
}


export default {print_data, fetchData};