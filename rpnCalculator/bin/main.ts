import {stdin} from "node:process";
import {calculate} from "@/calculator";

const main = (): void => {
  stdin.resume();
  stdin.on("data", data => {
    const input = data.toString("utf-8").trim();
    const res = calculate(input);
    if (res instanceof Error) {
      console.error(res);
    } else {
      console.log(res);
    }
    process.exit(0);
  });
};

main();
