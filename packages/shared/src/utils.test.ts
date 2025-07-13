import { describe, it, expect } from "vitest";
import { generateId, sleep, invariant, clamp, deepClone } from "./utils.js";

describe("generateId", () => {
  it("returns a valid UUID string", () => {
    const id = generateId();
    expect(id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    );
  });

  it("returns unique values on each call", () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()));
    expect(ids.size).toBe(100);
  });
});

describe("clamp", () => {
  it("returns value when within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("clamps to min when value is below", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("clamps to max when value is above", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("returns min when min equals max", () => {
    expect(clamp(5, 3, 3)).toBe(3);
  });
});

describe("invariant", () => {
  it("does not throw when condition is truthy", () => {
    expect(() => invariant(true, "ok")).not.toThrow();
    expect(() => invariant(1, "ok")).not.toThrow();
    expect(() => invariant("yes", "ok")).not.toThrow();
  });

  it("throws when condition is falsy", () => {
    expect(() => invariant(false, "nope")).toThrow("Invariant violation: nope");
    expect(() => invariant(0, "zero")).toThrow("Invariant violation: zero");
    expect(() => invariant(null, "null")).toThrow("Invariant violation: null");
    expect(() => invariant(undefined, "undef")).toThrow(
      "Invariant violation: undef"
    );
  });
});

describe("deepClone", () => {
  it("clones primitive values", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("hello")).toBe("hello");
  });

  it("deeply clones objects", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
  });

  it("deeply clones arrays", () => {
    const original = [1, [2, 3]];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[1]).not.toBe(original[1]);
  });
});

describe("sleep", () => {
  it("resolves after the specified duration", async () => {
    const start = Date.now();
    await sleep(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(40);
  });
});
