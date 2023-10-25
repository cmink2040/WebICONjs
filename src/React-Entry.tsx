// import data from '../data';
import React from 'react';

const fetchData = async () => {
        const data = await import('../data');
        return data.default.data;
};

interface EntryProps {
                
        name: string;
        location: string;
        mode: string;
        type: string;
    
        className?: string;
    }

interface Types {
        [key: string]: string;
}




const Entry = (props:EntryProps) => {
        const [URL, setURL] = React.useState("");
        const [dat, setDat] = React.useState(null);


     
        
        React.useEffect(() => {
                fetchData().then((data) => {
                        const dat : any = data;
                        const src = dat["url"]+dat[props.location] + "/" + dat[props.mode]+"/"+ props.name + FileTypes[props.type];
                        setURL(src);
                        setDat(data);
                });
        }, []);
     
        const FileTypes : Types = {
                'svg': '.svg',
                'png': '.png',
                'jpg': '.jpg',
                'jpeg': '.jpeg',
                'gif': '.gif',
        }

    return <img src={URL} className={props.className} 
            alt={`Could not find: ${props.name} at ${props.location}`}/>
    
   
}

export default Entry;