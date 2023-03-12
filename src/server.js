import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Petterson",
      email: "petterson@email.com",
    });

    return res.writeHead(201).end("Usuário criado");
  }

  return res.writeHead(404).end("Route not found!");
});

server.listen(3333);
