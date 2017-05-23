This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Usage
Change configuration environment (We strongly recommend against committing your .env file to version control):
```
mv .env.default .env
```
Install [Yarn](https://yarnpkg.com/) (if not have)

```
sudo npm i -g yarn
```

Using Yarn because it faster than npm

```
yarn
```

Create fake REST API unsing [json-server](https://github.com/typicode/json-server)

Install (if not have)

```
sudo npm i -g json-server
```

Running REST API server

```
json-server --watch db.json --port 3004
json-server --watch db.json -p 1234 -d 2000

```

Start app

```
npm start
```

Run Eslint

Using external command to lint js file. Because don't know how to config eslint with create-react-app command

```
npm run eslint
```
Ymeetme Chat URL: http://localhost:3000
## Todos

* [x] Using Airbnb eslint instead of default eslint
* [ ] Change some components's name for clear meaning
