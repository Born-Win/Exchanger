import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class StaticFilesController {
  @Get('/')
  serveStatic(@Res() res: Response) {
    console.log('request');
    const filePath = join(__dirname, '../../public', 'index.html');
    console.log(filePath);
    res.sendFile(filePath);
  }
}
