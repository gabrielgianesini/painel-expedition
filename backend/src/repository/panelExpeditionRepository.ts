import { OracleDB } from "./infra/oracle";

class PanelExpeditionRepository {
  async getExpedition() {
    const db = new OracleDB();

    await db.connect();

    const result = await db.executeQuery("SELECT * FROM your_table WHERE column_name = :value", ["your_value"]);

    await db.close();

    return result;
  }
}

export const panelExpeditionRepository = new PanelExpeditionRepository();
