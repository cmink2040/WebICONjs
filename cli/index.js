#!/usr/bin/env node


/* 
 * Cli
 *
 * Generates a configuration file for the application, or updates an existing one if it exists.
 */
import fs from 'fs';


if(fs.existsSync('./webicon-config.cjs')) {
        console.log('Configuration file already exists. Please edit it manually. If you want it to be overwritten, delete it and run this command again.');
        process.exit(1);
}

else {

        console.log('Creating configuration file...')
        fs.writeFileSync('./webicon-config.cjs', 
        ' module.exports = { \n \
            data: {\n \
            "url": "http://localhost:8912", \n \
            "light-mode": "Light-Mode", \n \
            "dark-mode": "Dark-Mode", \n \
            "color-mode": "Color-Mode", \n \
            "google-icons": "/GoogleMyIcons", \n \
            "social-icons": "/Logos", \n \
            "skyai": "/SkyAI", \n \
            // To learn more about webiconjs config files, please visit webiconjs.cmink.lmchkt.com(url does not work right now) \n \
        } \n }'
        );
    }

console.log("Finished running create-config.ts")


    
// Create a new configuration file.

// module.exports = create_config;




  
  



