import data from '../data'


interface Types {
    [key: string]: any;
}

const dat: Types =  data;

function print_data() {
    console.log(data)
    console.log(data.url)
    console.log(dat.data["url"])
}


export default {print_data};