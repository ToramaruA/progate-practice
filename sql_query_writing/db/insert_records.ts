import fs from "node:fs";
import {execQuery} from "../util/exec_query";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const queries = fs
    .readFileSync(path.resolve(__dirname, "data", "sns.sql"))
    .toString("utf-8")
    .trim()
    .split(");")
    .slice(0, -1)
    .map(query => query + ");");

  for (let i = 0; i < queries.length; i++) {
    await execQuery(queries[i]);
  }
})();
