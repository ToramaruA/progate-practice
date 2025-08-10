import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });

  test("returns null when name or email is empty", async () => {
    let result = await createUser("", "test@example.com");
    expect(result).toBeNull();

    result = await createUser("John", "");
    expect(result).toBeNull();
  });

  test("creates a user with valid name and email", async () => {
    const db = await databaseManager.getInstance();
    const name = "John Doe";
    const email = "john.doe@example.com";

    const createdUser = await createUser(name, email);

    // ユーザーが作成されていることを確認
    if (createdUser) {
      expect(createdUser).toBeDefined();
      expect(createdUser.name).toBe(name);
      expect(createdUser.email).toBe(email);
    } else {
      console.error("createdUser is not definded");
    }

    // データベースにユーザーが存在することを確認
    const result = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    expect(result).toBeDefined();
    expect(result.name).toBe(name);
    expect(result.email).toBe(email);
  });
});
