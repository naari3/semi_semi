const { router, get } = require("microrouter");

const makeSad = count =>
  `（${"；＿".repeat(Math.min(777777, count)).slice(0, -1)}）`;

const parsePositiveInt = str => Math.abs(parseInt(str, 10));

const memo = {};
const memoize = fn => {
  return arg => {
    const count = Math.min(777777, count);
    if (memo[count]) {
      return memo[count];
    } else {
      const result = fn(count);
      memo[count] = result;
      return result;
    }
  };
};

const memoizedMakeSad = memoize(makeSad);

const semi = async (req, res) => {
  res.setHeader("Content-type", "text/plain; charset=UTF-8");
  res.end(memoizedMakeSad(parsePositiveInt(req.params.count) || 2));
};

module.exports = router(get("/:count", semi), get("/*", semi));
