import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAll() {
        return ['task1', 'task2'];
    }

    testing() {
        return 'test'
    }
}
