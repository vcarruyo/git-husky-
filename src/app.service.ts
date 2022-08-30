import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) {}

	getHello(): string {
		//Comment
		return 'Hello World!';
	}

	findOneUser(): Observable<User> {
		return this.httpService
			.get('https://jsonplaceholder.typicode.com/users/1', {
				headers: { Accept: 'application/json' },
			})
			.pipe(map((response: any) => response.data));
	}
}
