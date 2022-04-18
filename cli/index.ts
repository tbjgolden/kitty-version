#!/usr/bin/env node

import { hello } from "kitty-version";

const [_cmd, _fileName, ...args] = process.argv;
const arg = args.join(" ");

if (arg !== "") {
  console.log(hello(arg));
}
