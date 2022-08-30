import { Controller, Get } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AppService } from './app.service';
import { User } from './interfaces/user';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('/users')
	findOneUser(): Observable<User> {
		return this.appService
			.findOneUser()
			.pipe(map((response: any) => response.data));
	}
}
