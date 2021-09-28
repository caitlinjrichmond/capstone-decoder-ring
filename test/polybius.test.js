const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

// test to ensure function encodes a message //

describe("polybius", () => {
  it("should encode a message by match a letter to it's numberic position on the grid", () => {
    const input = "hello";
    // const encode = true //

    const expected = "3251131343";
    const actual = polybius("hello");
    expect(actual).to.equal(expected);
  });
});

// test to ensure function decodes a message //

describe("polybius", () => {
  it("should decode a message by matching the number with its associated number on the grid", () => {
    const input = "3251131343";
    const encode = false;

    const expected = "hello";
    const actual = polybius("3251131343", false);
    expect(actual).to.equal(expected);
  });
});

// test to ensure that when decoding, only inputs with an even number of char are accepted //

describe("polybius", () => {
  it("should return false if an input is an uneven number of characters when decoding", () => {
    const input = "325113134";
    const encode = false;

    const expected = false;
    const actual = polybius("325113134", false);
    expect(actual).to.equal(expected);
  });
});

// tests to ensure the function returns a string when encoding and decoding, respectively //

describe("polybius", () => {
  it("should return a string when encoding", () => {
    const input = "hello";
    // const encode = true //

    const expected = "3251131343";
    const actual = polybius("hello");
    expect(actual).to.be.a("string");
  });
});

describe("polybius", () => {
  it("should return a string when decoding", () => {
    const input = "3251131343";
    const encode = false;

    const expected = "hello";
    const actual = polybius("3251131343");
    expect(actual).to.be.a("string");
  });
});

// tests to ensure function ignores capital letters when encoding and decoding, respectively //

describe("polybius", () => {
  it("should ignore capital letters when encoding", () => {
    const input = "HELLO";
    // const encode = true //

    const expected = "3251131343";
    const actual = polybius("HELLO");
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should ignore capital letters when decoding", () => {
    const input = "3251131343";
    const encode = false;

    const expected = "hello";
    const actual = polybius("3251131343", false);
    expect(actual).to.equal(expected);
  });
});

// tests to ensure that function maintains spaces when encoding and decoding, respectively//

describe("polybius", () => {
  it("should maintain spaces when encoding", () => {
    const input = "a cat";
    // const encode = true //

    const expected = "11 311144";
    const actual = polybius("a cat");
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("should maintain spaces when decoding", () => {
    const input = "11 311144";
    const encode = false;

    const expected = "a cat";
    const actual = polybius("11 311144", false);
    expect(actual).to.equal(expected);
  });
});

// test to insure that function translates letters i & j to 42 when encoding //

describe("polybius", () => {
  it("should translate the letters i and j to the number 42 when encoding", () => {
    const input = "jello";
    // const encode = true; //

    const expected = "4251131343";
    const actual = polybius("jello");
    expect(actual).to.equal(expected);
  });
});

// test to insure that function translates the number 42 to (i/j) when decoding //

describe("polybius", () => {
  it("should translate the number 42 to (i/j) when decoding", () => {
    const input = "4251131343";
    const encode = false;

    const expected = "(i/j)ello";
    const actual = polybius("4251131343", false);
    expect(actual).to.equal(expected);
  });
});
