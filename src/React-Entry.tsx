import {data} from './data'
import React from 'react';

const gicon = data["url"] + data["google-icons"]  + "/";

const skyai = data["url"] + data["social-icons"] + "/" + data["skyai"]+"/";

type dict_lookup = {
        [key: string]: string
    }


const from_bin: dict_lookup = {
        "gicon":  data["google-icons"],
        "skyai":  data["social-icons"] + "/" + data["skyai"]
}

const LDMode : dict_lookup = {
        'light': data['light-mode'],
        'dark': data['dark-mode']
}

const FileTypes : dict_lookup = {
        'svg': '.svg',
        'png': '.png',
        'jpg': '.jpg',
        'jpeg': '.jpeg',
        'gif': '.gif',
}

interface EntryProps {
        
        name: string;
        location: string;
        mode: string;
        type: string;
    
        className?: string;
    }

const Entry = (props:EntryProps) => {
    const src = data["url"]+from_bin[props.location] + "/" + LDMode[props.mode]+"/"+ props.name + FileTypes[props.type];

    return <img src={src} className={props.className} 
            alt={`Could not find: ${props.name} at ${props.location}`}/>
    
   
}

export default Entry;