// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

// test to ensure function encodes message properly //
describe("substitution", () => {
    it("should encode a message based on the given alphabet key", () => {
        const input = "hello";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        // const encode = true;

        const expected = "rmwwl";
        const actual = substitution("hello", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
});

// test to ensure function decodes message properly //
describe("substitution", () => {
    it("should decode a message based on the given alphabet key", () => {
        const input = "rmwwl";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = false;

        const expected = "hello";
        const actual = substitution("rmwwl", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
});

// test to ensure function returns false if alphabet key is NOT 26 char when encoding and decoding, respectively//
describe("substitution", () => {
    it("should return false if the alphabet key does not contain exactly 26 characters when encoding", () => {
        const input = "hello";
        const alphabet = "xoyqmcgrukswaflnthdjpzibe";
        // const encode = true;

        const expected = false;
        const actual = substitution("hello", "xoyqmcgrukswaflnthdjpzibe");
        expect(actual).to.equal(expected);
    })
});

describe("substitution", () => {
    it("should return false if the alphabet key does not contain exactly 26 characters when decoding", () => {
        const input = "rmwwl";
        const alphabet = "xoyqmcgrukswaflnthdjpzibe";
        const encode = false;

        const expected = false;
        const actual = substitution("rmwwl", "xoyqmcgrukswaflnthdjpzibe", false);
        expect(actual).to.equal(expected);
    })
});

//tests to ensure function returns false if alphabet key contains duplicates during encoding and decoding, respectively //
describe("substitution", () => {
    it("should return false if the alphabet key contains duplicates when encoding", () => {
        const input = "hello";
        const alphabet = "xoyqmcgrukswaflnthdjpzibee";
        // const encode = true;

        const expected = false;
        const actual = substitution("hello", "xoyqmcgrukswaflnthdjpzibee");
        expect(actual).to.equal(expected);
    })
});

describe("substitution", () => {
    it("should return false if the alphabet key contains duplicates when decoding", () => {
        const input = "rmwwl";
        const alphabet = "xoyqmcgrukswaflnthdjpzibee";
        const encode = false;

        const expected = false;
        const actual = substitution("rmwwl", "xoyqmcgrukswaflnthdjpzibee", false);
        expect(actual).to.equal(expected);
    })
});

// tests to ensure function maintains spaces while encoding and decoding, respectively //
describe("substitution", () => {
    it("should maintain spaces while encoding", () => {
        const input = "a cat";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        // const encode = true;

        const expected = "x yxj";
        const actual = substitution("a cat", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
});

describe("substitution", () => {
    it("should maintain spaces while decoding", () => {
        const input = "x yxj";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = false;

        const expected = "a cat";
        const actual = substitution("x yxj", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
});

// tests to ensure function ignores capital letters when encoding and decoding, respectively //
describe("substitution", () => {
    it("should ignore capital letters encoding", () => {
        const input = "A CAT";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        // const encode = true;

        const expected = "x yxj";
        const actual = substitution("A CAT", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    })
});

describe("substitution", () => {
    it("should ignore capital letters while decoding", () => {
        const input = "X YXJ";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = false;

        const expected = "a cat";
        const actual = substitution("X YXJ", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })
});