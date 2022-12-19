import { execSync } from "node:child_process";

let version: string | false | undefined = undefined;

const SEMVER_REGEX =
  /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/;

export default function kittyVersion(): string | undefined {
  if (process.platform === "win32") {
    return undefined;
  }

  if (version === undefined) {
    if (process.env.TERM === "xterm-kitty") {
      try {
        const stdout = execSync("kitty --version").toString();
        version = stdout.match(SEMVER_REGEX)?.[0] ?? false;
      } catch (err) {
        version = false;
      }
    }
  }

  return version === false ? undefined : version;
}
