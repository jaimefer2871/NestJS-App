import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

    async getAllProjects() {
        let output = {
            'error': false,
            'code': 200,
            'message': 'OK',
            data: {}
        }
        let response = await fetch('https://www.boredapi.com/api/activity');

        if (response.status === 200) {
            output['data'] = await response.json()
        }
        console.log(output);

        return output;
    }
}
