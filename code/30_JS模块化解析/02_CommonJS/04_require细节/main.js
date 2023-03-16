// 情况一: 核心模块
const path = require("path");
const fs = require("fs");
// console.log(path.resolve());
console.log(path.extname);
// path.extname();

// fs.readFile()

// 情况二: 路径 ./ ../ /

// console.log(abc.name)

// 情况三: X不是路径也不是核心模块
// const axios = require('axios')
// 他是个数组，并且在当前以及上层目录后拼上了node_modules，这样当你使用了非核心模块，就会一层层往上去找
console.log(module.paths);
