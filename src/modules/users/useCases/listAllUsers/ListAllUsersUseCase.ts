import { CustomError } from "../../../../utils/CustomError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user_id !== "undefined" && user_id != null && !user) {
      console.log(user_id);
      throw new CustomError("User not existis!!", 400);
    }

    if (user_id !== "undefined" && user.admin === false) {
      throw new CustomError("User is not admin!!", 400);
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
