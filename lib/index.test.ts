import { kittyVersion } from ".";

const SEMVER_REGEX =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*))*))?(?:\+([\dA-Za-z-]+(?:\.[\dA-Za-z-]+)*))?$/;

test("kittyVersion returns a version or undefined", () => {
  const version = kittyVersion();
  if (typeof version === "string") {
    expect(version).toMatch(SEMVER_REGEX);
  } else {
    expect(version).toBe(undefined);
  }
});
