import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  
  execute({ user_id }: IRequest): User {
    const user =  new User();
    Object.assign(user,{
      id: user_id
    })
    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
