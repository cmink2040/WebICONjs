import data from '../data.js';

import React from 'react';

const gicon = data["url"] + data["google-icons"]  + "/";

const skyai = data["url"] + data["social-icons"] + "/" + data["skyai"]+"/";

const from_bin = {
        "gicon":  data["google-icons"],
        "skyai":  data["social-icons"] + "/" + data["skyai"]
}


interface EntryProps {
    name: string;
    location: string;
    mode: string;
    type: string;


    className?: string;
}

const LDMode = {
        'light': data['light-mode'],
        'dark': data['dark-mode']
}

const FileTypes = {
        'svg': '.svg',
        'png': '.png',
        'jpg': '.jpg',
        'jpeg': '.jpeg',
        'gif': '.gif',
}


const Entry = (props:EntryProps) => {
    const src = data["url"]+from_bin[props.location] + "/" + LDMode[props.mode]+"/"+ props.name + FileTypes[props.type];

    return <img src={src} className={props.className} 
            alt={`Could not find: ${props.name} at ${props.location}`}/>
    
   
}

export default Entry;