"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const util_1 = require("../server/util");
const router_1 = __importDefault(require("../server/router"));
dotenv.config();
// some constants
const MONGO_URL = process.env.MONGO_SRV;
if (!MONGO_URL) {
    throw new Error("MONGO_SRV is not defined in .env file!");
}
// MongoDB connection using Mongoose
const mongoClient = mongoose_1.default
    .connect(MONGO_URL)
    .then((mongo) => {
    console.log("Connected to MongoDB database.");
    return mongo.connection.getClient();
})
    .catch((error) => {
    console.log(`Error connecting to MongoDB database: ${error}`);
    throw new Error(error.message);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, express_mongo_sanitize_1.default)());
app.set("port", process.env.PORT ?? 8000);
// sessions
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET ?? "secret",
    resave: true,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({
        clientPromise: mongoClient,
        dbName: "sessions",
        autoRemove: "interval",
        autoRemoveInterval: 10,
    }),
}));
const API_PREFIX = "/api";
// Add your routers here:
app.use(API_PREFIX, router_1.default);
const buildDir = path_1.default.resolve(__dirname, "..", "client", "build");
const indexDir = path_1.default.join(buildDir, "index.html");
// Build directory
app.use(express_1.default.static(buildDir));
// Serve index.html for all other routes
app.get("*", (req, res) => {
    res.status(util_1.OK).sendFile(indexDir);
});
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(util_1.SERVER_ERROR).send({ error: "Server error" });
});
const server = http_1.default.createServer(app);
server.listen(app.get("port"), () => {
    console.log(`Server running on port: ${app.get("port")}`);
});
