import { LaunchOptions } from "puppeteer";

import { chromiumSwitches } from "./chrome-switches";

export const launchOptions: LaunchOptions = {
  args: chromiumSwitches,
  userDataDir: "user-data",
  headless: true
};
