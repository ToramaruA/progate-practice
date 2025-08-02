import http from "node:http";
import fs from "node:fs";
import path from "node:path";

// 拡張子に対応する Content-Type を定義
const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "text/json",
  ".ico": "image/x-icon",
};

const server = http.createServer();

server.on("request", async (req, res) => {
  console.log("request url: ", req.url);

  const filePath = path.join(process.cwd(), "public", req.url ?? "");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Content-Type is important for browsers.
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
      res.writeHead(404, {"content-type": "text/plain"});
      res.end("Not found");
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || "application/octet-stream";

      res.writeHead(200, {"content-type": contentType}); // MIMEタイプは今回はhtml前提
      res.end(data);
    }
  });
});

server.on("listening", () => {
  console.log("start listening!");
});

// Start listening 12345 port of localhost (127.0.0.1).
const PORT = process.env.PORT || 12345;
server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
console.log("run server.js");
