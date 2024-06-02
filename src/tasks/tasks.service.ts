import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private listTasks = []

    getAll() {
        return this.listTasks;
    }

    testing() {
        return 'test'
    }

    create(task: any) {
        this.listTasks.push({
            ...task,
            "id": this.listTasks.length + 1
        })
    }

    getTask(id: number) {
        const task = this.listTasks.find((task) => task.id === id);

        if (!task) {
            throw new NotFoundException(`No se encontro la tarea con id ${id}`);
        }

        return task;
    }

    updateTask(task:UpdateTaskDto) {
        return this.listTasks;
    }
}
