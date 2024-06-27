import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';
interface Task {
    id: number,
    name: string
}

@Controller('tasks')
@ApiTags('Tareas')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get('/')
    getAllTasks(@Query() query:any) {
        console.log('q',query.limit);
        return this.taskService.getAll();
    }

    @Get('/:id')
    getTask(@Param('id') id:string): Task {
        return this.taskService.getTask(parseInt(id));
    }

    @Post('/create')
    createTasks(@Body() requestTask: CreateTaskDto) {
        return this.taskService.create(requestTask);
    }

    @Put('/update')
    updateTask(@Body() updateTask: UpdateTaskDto) {
        return this.updateTask(updateTask);
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
