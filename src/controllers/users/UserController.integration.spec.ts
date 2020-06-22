import {PlatformTest} from "@tsed/common";
import * as SuperTest from "supertest";
import {rootDir, Server} from "../../Server";
import {UserController} from "./UserController";

describe("UserController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    logger: {
      level: "debug"
    },
    mount: {
      "/": [UserController]
    },
    typeorm: [
      {
        name: "default",
        type: "sqlite",
        database: ":memory:",
        dropSchema: true,
        synchronize: true,
        logging: false,
        entities: [
          `${rootDir}/entities/*{.ts,.js}`
        ],
        migrations: [
          `${rootDir}/migrations/*{.ts,.js}`
        ],
        subscribers: [
          `${rootDir}/subscriber/*{.ts,.js}`
        ]
      }
    ]
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /users", async () => {
    const response = await request.get("/users").expect(200);

    expect(response.body).toEqual([]);
  });
});
