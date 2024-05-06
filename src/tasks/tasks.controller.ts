import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get('/')
    getAllTasks() {
        return this.taskService.getAll();
    }

    @Post('/create')
    createTasks() {
        return 'Creando';
    }

    @Put('/update')
    updateTasks() {
        return 'Actualizando';
    }

    @Patch('/updatePartial')
    updatePartialTasks() {
        return 'Actualizando';
    }

    @Delete('/delete')
    deleteTasks() {
        return 'Eliminando';
    }
}
