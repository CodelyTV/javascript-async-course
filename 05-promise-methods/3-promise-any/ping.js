import net from "net";

export async function ping(region) {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection(80, region.ip);
    socket.setTimeout(3000);

    socket.on("connect", () => {
      socket.end();
      resolve(region);
    });

    socket.on("timeout", () => {
      socket.destroy();
      reject();
    });

    socket.on("error", () => {
      socket.destroy();
      reject();
    });
  });
}
