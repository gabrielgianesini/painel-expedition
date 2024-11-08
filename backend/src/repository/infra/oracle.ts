import oracledb from "oracledb";

export class OracleDB {
  private connection: oracledb.Connection | undefined;

  async connect() {
    try {
      this.connection = await oracledb.getConnection({
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        connectString: process.env.URL_DB,
      });
      console.log("Successfully connected to Oracle Database");
    } catch (err) {
      console.error("Error connecting to Oracle Database", err);
    }
  }

  async executeQuery(query: string, params: any[] = []) {
    if (!this.connection) {
      console.error("No connection available");
      return;
    }

    try {
      console.log("Executing query:", query, "params:", params);
      const result = await this.connection.execute(query, params);
      return result.rows;
    } catch (err) {
      console.error("Error executing query", err);
    }
  }

  async close() {
    if (this.connection) {
      try {
        await this.connection.close();
        console.log("Connection closed");
      } catch (err) {
        console.error("Error closing connection", err);
      }
    }
  }
}
