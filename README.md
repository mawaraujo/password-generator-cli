# Password Generator CLI
Password generator is a command-line interface program to generate a random password and save it on a file

## Basic setup
1. run ``` npm install ```
1. run ``` npm run build ```
2. Go to the folder dist/ a run the js file
3. run ```node dist/ --{option} ```

## Available options
* ``` -l or --length <number> ```: Length of password (default 10)
* ``` -s or --save ```: Save the password on files/password.txt
* ``` -nn or --no-numbers ```: Remove numbers on the password
* ``` -ns or --no-symbols ```: Remove symbols on the password
* ``` -n or --name ```: Name for saved password (default: unnamed) 

## Examples
* ``` node dist/ --name=mauro@facebook.com --no-symbols --save```
* ``` node dist/ --name=mauro@twitter.com --no-numbers --no-symbols --length=30 --save```
