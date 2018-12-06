import { Stack } from "../stack/Stack";

interface IUser {
  name: string;
}
class User implements IUser {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

describe("Stack", () => {
  it("Expect last in first out", () => {
    const UserStack = new Stack<User>();
    const user1 = new User("Natalie");
    const user2 = new User("Ivy");
    UserStack.push(user1);
    UserStack.push(user2);

    const lastUser = UserStack.pop();

    if (lastUser) {
      expect(lastUser.name).toBe("Ivy");
    }

    const newLastUser = UserStack.pop();

    if (newLastUser) {
      expect(newLastUser.name).toBe("Natalie");
    }
  });
});
