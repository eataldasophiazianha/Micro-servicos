import path from "path";
import grpc from "grpc";

const protoLoader = require("@grpc/proto-loader");

const packegeDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "pb", "messagens.proto"), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
);
const proto = grpc.loadPackageDefinition(packegeDefinition);