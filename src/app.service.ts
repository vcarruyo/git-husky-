import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) {}

	getHello(): string {
		return 'Hello World!';
	}

	findAllUsers(): any {
		return this.httpService
			.get('https://jsonplaceholder.typicode.com/users', {
				headers: { Accept: 'application/json' },
			})
			.pipe(map((response: any) => response.data));
	}
}
