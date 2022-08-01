import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const id = user_id;
    const user = this.usersRepository.findById(id);
    if(user) return user;
    throw new Error(`User with id '${id}' does not exist`);
  }
}

export { ShowUserProfileUseCase };
