import { execSync } from "node:child_process";

let version: string | false | undefined;

const SEMVER_REGEX =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*))*))?(?:\+([\dA-Za-z-]+(?:\.[\dA-Za-z-]+)*))?$/;

export const kittyVersion = (): string | undefined => {
  if (process.platform === "win32") {
    return undefined;
  }

  if (version === undefined && process.env.TERM === "xterm-kitty") {
    try {
      const stdout = execSync("kitty --version").toString();
      version = stdout.match(SEMVER_REGEX)?.[0] ?? false;
    } catch {
      version = false;
    }
  }

  return version === false ? undefined : version;
};
