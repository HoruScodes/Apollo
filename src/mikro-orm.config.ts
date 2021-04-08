// import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
// import { MikroORM } from "@mikro-orm/core";
// import path from "path";

// const options : Parameters.MicroORM = {
//   migrations: {
//     path: path.join(__dirname, "./migrations"),
//     pattern: /^[\w-]+\d+\.[tj]s$/,
//   },
//   entities: [Post],
//   dbName: "apollo",
//   type: "postgresql",
//   user: "postgres",
//   password: "root",
//   debug: !__prod__,
// };

// export default options;

import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "apollo",
  type: "postgresql",
  user: "postgres",
  password: "root",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
