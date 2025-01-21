import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows;
  }

  async create(email: string, password: string) {
    const [rows] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) VALUES (?, ?)",
      [email, password],
    );

    return rows.insertId;
  }
}

export default new UserRepository();
