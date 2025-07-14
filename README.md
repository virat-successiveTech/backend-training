# backend-training
-> Update package lists: sudo apt update

-> Install curl: sudo apt install curl

-> Add NodeSource LTS setup script: curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

-> Install Node.js and npm: sudo apt install nodejs

-> Verify installation: node -v and npm -v

-> Create a new folder for the project: mkdir backend-training && cd backend-training

-> Initialize a Git repository: git init

-> Create a README file: touch README.md

-> Add the above steps to the README file

-> Stage and commit changes: git add . and git commit -m "Initial setup with Node.js LTS installation guide"

--------------------------------------------------------------------------------------------------------------------------

Setting up cookie parser :
---------------------------
npm install cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

 Installing Postman (Linux):
 ----------------------------
 sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
sudo apt-get update
sudo apt-get install postman
