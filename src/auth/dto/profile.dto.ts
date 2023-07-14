import { IsNotEmpty, IsString } from "class-validator";
import { Role } from "../interface/user.interface";

export class ProfileDto{
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsString()
    userName:string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsString()
    role:Role;
}