import { Controller, Get, Req, Res } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Request, Response } from 'express';

@Controller('projects')
export class ProjectsController {

    constructor(private projectService: ProjectsService) { }

    @Get('/all')
    listAllProjects() {
        return this.projectService.getAllProjects();
    }

    @Get('/')
    getIndex(@Req() request:Request, @Res() response: Response){
        return response.status(200).json({
            "message": "Inicio de Proyectos"
        })
    }
}
