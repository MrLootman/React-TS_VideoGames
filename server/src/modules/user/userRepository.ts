import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { User } from "./user";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows;
  }

  async findIfEmailExists(email: string) {
    const [row] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    return row;
  }

  async add(user: User) {
    const [row] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) VALUES (?, ?)",
      [user.email, user.password],
    );

    return row.insertId;
  }
}

export default new UserRepository();
