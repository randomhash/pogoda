import {Request, Response} from 'express';
import log from '../util/logger';

export async function getInfo(req: Request, res: Response): Promise<Response> {
  log.info('Fetched');

  return res.status(200).send({});
}
