import data from '../data';
import React from 'react';

interface EntryProps {
                
        name: string;
        location: string;
        mode: string;
        type: string;
    
        className?: string;
    }
interface Types {
        [key: string]: any;
}

const dat: Types =  data;

const Entry = (props:EntryProps) => {
        const gicon = dat.data["url"] + dat.data["google-icons"]  + "/";
        const skyai = dat.data["url"] + dat.data["social-icons"] + "/" + dat.data["skyai"]+"/";
        
        type dict_lookup = {
                [key: string]: string
            }
        
        
        const from_bin: dict_lookup = {
                "gicon":  dat.data["google-icons"],
                "skyai":  dat.data["social-icons"] + "/" + dat.data["skyai"]
        }
        
        const LDMode : dict_lookup = {
                'light': dat.data['light-mode'],
                'dark': dat.data['dark-mode']
        }
        
        const FileTypes : dict_lookup = {
                'svg': '.svg',
                'png': '.png',
                'jpg': '.jpg',
                'jpeg': '.jpeg',
                'gif': '.gif',
        }
        
       

    const src = dat.data["url"]+from_bin[props.location] + "/" + LDMode[props.mode]+"/"+ props.name + FileTypes[props.type];

    return <img src={src} className={props.className} 
            alt={`Could not find: ${props.name} at ${props.location}`}/>
    
   
}

export default Entry;