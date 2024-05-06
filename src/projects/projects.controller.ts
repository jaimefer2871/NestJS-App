import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {

    constructor(private projectService: ProjectsService) { }

    @Get('/all')
    listAllProjects() {
        return this.projectService.getAllProjects();
    }
}
