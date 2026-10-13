require("dotenv").config();

/** 
 * Cấu hình database 
 * Database name: vgreen (cố định) 
 * Ưu tiên đọc MONGODB_URI từ biến môi trường (dùng cho MongoDB Atlas khi production)
 * Fallback sang localhost khi phát triển local
 */ 

const DATABASE_NAME = process.env.DB_NAME || "vgreen";

// Ưu tiên MONGODB_URI từ env (Atlas URI), sau đó mới dùng HOST/PORT
const MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb://${process.env.MONGODB_HOST || "localhost"}:${
    process.env.MONGODB_PORT || "27017"
  }/${DATABASE_NAME}`;

module.exports = {
  DATABASE_NAME,
  MONGODB_URI,
};
