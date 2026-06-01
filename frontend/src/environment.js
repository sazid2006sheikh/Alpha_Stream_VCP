let IS_PROD = true;
const server = IS_PROD ?
    "https://alpha-stream-backend.onrender.com" :

    "http://localhost:8000"


export default server;