import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const id = user_id;
    const user = this.usersRepository.findById(id);
    if(user && user.admin) return this.usersRepository.list();
    if(!user) throw new Error(`User ${user_id} not found`);
    throw new Error(`User ${user.email} is not admin`);
  }
}

export { ListAllUsersUseCase };
