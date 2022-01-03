## Typescript practice 🫐

<img src='https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif' width=200>

### Install `typescript`

- `sudo npm i -g typescript`
- check version: `tsc -v`

### Compile a `typescript` file

- `tsc [filename]`
- compiling the file will show all possible errors:
  <img src='images/compile.png' width=500>
- after file being compiled, a `js` version of the file is being created:
  <img src='images/newFile.png' width=200>
- the compiled `js` file is converting by default to ES5:
  <img src='images/compiled.png' width=200>

### Watch a file

- `tsc --watch [filename]`
