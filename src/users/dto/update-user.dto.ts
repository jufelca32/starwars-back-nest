import { 
    IsEmail,
    IsOptional,
    IsString,
    IsStrongPassword,
    MinLength } 
    from 'class-validator';

export class UpdateUserDto {
    @IsString()
    
    @MinLength(3)
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsStrongPassword()
    @IsOptional()
    password?: string;
}
