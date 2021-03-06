import { 
    Controller, 
    Body, 
    Post, 
} from '@nestjs/common';

import {
    Usuario
} from '@prisma/client';

import {
    CreateUsuarioDto
} from './dto/create-usuario.dto';

import {
    UsersService
} from './users.service';

import {
    UsuarioRole
} from './enum/role.enum';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Post('create-usuario')
    create(@Body() data: CreateUsuarioDto): Promise<Usuario> {
        return this.service.create(data, UsuarioRole.USUARIO)
    }
}
