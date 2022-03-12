import { server } from "./http";
import "./websocket/ChatService";

server.listen(3000,()=> console.log('serve run 3000'));

