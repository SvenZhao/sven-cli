import c from "ansi-colors";
const log = {
  info: (string: string) => {
    console.log(string);
  },
  error: (string: string) => {
    console.log(c.red(string));
  },
  done: (string: string) => {
    console.log(c.green(string));
  },
};

export default log;
