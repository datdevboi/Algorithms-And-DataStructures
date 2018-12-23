import { Queue } from "../queue/Queue";

interface IUser {
  name: string;
}
class User implements IUser {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

describe("Queue", () => {
  it("Expect first in first out", () => {
    const userQueue = new Queue<User>();
    const user1 = new User("Natalie");
    const user2 = new User("Ivy");

    userQueue.push(user1);
    userQueue.push(user2);

    const peekedUser = userQueue.peek();

    if (peekedUser) {
      expect(peekedUser.name).toBe("Natalie");
    }

    userQueue.pop(); // Removed Natalie

    const lastUser = userQueue.pop();

    if (lastUser) {
      expect(lastUser.name).toBe("Ivy");
    }

    const noUser = userQueue.pop();

    expect(noUser).toBe(undefined);
  });
});
