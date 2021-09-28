const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

// test to insure function encodes correctly //
describe("caesar", () => {
  it("should encode a message by shifting the alphabetical position of a letter to the left or right based on the given shift number", () => {
    const input = "hello";
    const shift = 1;
    // const encode = true; //

    const expected = "ifmmp";
    const actual = caesar("hello", 1);
    expect(actual).to.equal(expected);
  });
});

// test to insure function DEcodes correctly //
describe("caesar", () => {
  it("should decode a message by shifting the alphabetical position of a letter to the left or right based on the given shift number", () => {
    const input = "ifmmp";
    const shift = 1;
    const encode = false;

    const expected = "hello";
    const actual = caesar("ifmmp", 1, false);
    expect(actual).to.equal(expected);
  });
});

// tests to ensure that function returns "false" if shift value is equal to 0, less than -25, or more than 25, respectively //
describe("caesar", () => {
  it("should return false if shift value for message to be encoded is equal to 0", () => {
    const input = "hello";
    const shift = 0;
    // const encode = true; //

    const expected = false;
    const actual = caesar("hello", 0);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if shift value for message to be decoded is equal to 0", () => {
    const input = "hello";
    const shift = 0;
    const encode = false;

    const expected = false;
    const actual = caesar("hello", 0, false);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if shift value for message to be encoded is less than -25", () => {
    const input = "hello";
    const shift = -26;
    // const encode = true; //

    const expected = false;
    const actual = caesar("hello", -26);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if shift value for message to be decoded is less than -25", () => {
    const input = "hello";
    const shift = -26;
    const encode = false;

    const expected = false;
    const actual = caesar("hello", -26, false);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if shift value for message to be encoded is greater than 25", () => {
    const input = "hello";
    const shift = 26;
    // const encode = true; //

    const expected = false;
    const actual = caesar("hello", 26);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if shift value for message to be decoded is greater than 25", () => {
    const input = "hello";
    const shift = 26;
    const encode = false;

    const expected = false;
    const actual = caesar("hello", 26, false);
    expect(actual).to.equal(expected);
  });
});

// tests to ensure function returns false if shift value is not present //
describe("caesar", () => {
  it("should return false if shift value for message to be encoded is not present", () => {
    const input = "hello";
    const shift = null;
    // const encode = true; //

    const expected = false;
    const actual = caesar("hello");
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should return false if shift value for message to be decoded is not present", () => {
    const input = "hello";
    const shift = null;
    const encode = false;

    const expected = false;
    const actual = caesar("hello");
    expect(actual).to.equal(expected);
  });
});

// tests to insure that function ignores capital letters in both encoding and decoding //
describe("caesar", () => {
  it("should ignore capital letters when encoding a message", () => {
    const input = "HELLO";
    const shift = 1;
    // const encode = true; //

    const expected = "ifmmp";
    const actual = caesar("HELLO", 1);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should ignore capital letters when deocding a message", () => {
    const input = "IFMMP";
    const shift = 1;
    const encode = false;

    const expected = "hello";
    const actual = caesar("IFMMP", 1, false);
    expect(actual).to.equal(expected);
  });
});

// tests to insure function maintains spaces and non-alphabetic symbols in both encoding and decoding//
describe("caesar", () => {
  it("should maintain spaces and non-alphabetic symbols when encoding a message", () => {
    const input = "hello hello";
    const shift = 1;
    // const encode = true; //

    const expected = "ifmmp ifmmp";
    const actual = caesar("hello hello", 1);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should maintain spaces and non-alphabetic symbols when deocding a message", () => {
    const input = "ifmmp ifmmp";
    const shift = 1;
    const encode = false;

    const expected = "hello hello";
    const actual = caesar("ifmmp ifmmp", 1, false);
    expect(actual).to.equal(expected);
  });
});

// tests to ensure that function handles shifts that go past the end of the alphabet (wrapping to beginning of alphabet) //
describe("caesar", () => {
  it("should handle shifts that go past the end of the alphabet when encoding a message", () => {
    const input = "zz top";
    const shift = 1;
    // const encode = true; //

    const expected = "aa upq";
    const actual = caesar("zz top", 1);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should handle shifts that go past the end of the alphabet when decoding a message", () => {
    const input = "aa upq";
    const shift = -1;
    const encode = false;

    const expected = "zz top";
    const actual = caesar("aa upq", -1);
    expect(actual).to.equal(expected);
  });
});
