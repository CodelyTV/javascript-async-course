import WebSocket, { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({
  port: 9090,
});

wsServer.on("connection", function connection(wsClient) {
  console.log("client connected");

  wsClient.on("message", function message(data, isBinary) {
    wsServer.clients.forEach(function each(client) {
      if (client !== wsClient && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});

console.log("server started");
