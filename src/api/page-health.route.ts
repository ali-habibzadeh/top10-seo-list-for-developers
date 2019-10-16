import { Request, Response } from "express";

import { PageRenderService } from "../page-rendering/page-render.service";
import { isValidUrl } from "../utils/url.utils";

export async function getPageHealth(req: Request, res: Response): Promise<Response> {
  const { url } = req.query;
  if (isValidUrl(url)) {
    const metrics = await new PageRenderService(url).getPageRenderMetrics();
    return res.json(metrics);
  }
  return res.status(400).json({ error: "URL query parameter is not valid" });
}
