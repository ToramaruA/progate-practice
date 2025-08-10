import {getUserName} from "@/api/get_user_name";
import {fetchUser} from "@/api/fetch_user";

jest.mock("@/api/fetch_user", () => {
  return {
    fetchUser: jest.fn().mockImplementation((id: number) => {
      if (id === 1) {
        return Promise.resolve({name: "Mock"});
      } else {
        return Promise.resolve(null);
      }
    }),
  };
});

describe("getUserName", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns null on fetchUser failure", async () => {
    const ret = await getUserName(-1);
    expect(ret).toBeNull();
    expect(fetchUser).toHaveBeenCalledWith(-1);
    expect(fetchUser).toBeCalledTimes(1);
  });

  test("returns user name on fetchUser success", async () => {
    const ret = await getUserName(1);
    expect(ret).toBe("Mock");
    expect(fetchUser).toHaveBeenCalledWith(1);
    expect(fetchUser).toBeCalledTimes(1);
  });
});
