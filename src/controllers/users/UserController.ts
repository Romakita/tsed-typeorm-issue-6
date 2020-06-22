import {Controller, Get, Inject} from "@tsed/common";
import {UseConnection} from "@tsed/typeorm";
import {UserRepository} from "../../repositories/UserRepository";

@Controller("/users")
export class UserController {
  @Inject()
  @UseConnection("default")
  userRepository: UserRepository;

  @Get("/")
  get() {
    return this.userRepository.find({});
  }
}
