import { Request, Response } from "express";
import { panelExpeditionRepository } from "../../repository/panelExpeditionRepository";

interface getExpeditionRequest {
  dataInicio: string;
  dataFim: string;
  carga: string;
  destino: string;
  box: string;
  status: string;
}

class PainelExpeditionController {
  public getExpedition = async (req: Request, res: Response) => {
    const { dataInicio, dataFim, carga, destino, box, status } = req.body as getExpeditionRequest;

    if (!dataInicio || !dataFim) {
      return res.status(400).json({ message: "Data de início e fim são obrigatórias" });
    }

    try {
      const result = await panelExpeditionRepository.getExpedition();
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching expedition data:", error);
      return res.status(500).json({ message: "Erro ao buscar dados de expedição" });
    }
  };
}
export default PainelExpeditionController;
