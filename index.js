const { router, get } = require("microrouter");

const parsePositiveInt = str => Math.abs(parseInt(str, 10));

const memo = {};
const makeSad = count => {
  const validatedCount = Math.min(777777, count);
  return (
    memo[validatedCount] ||
    (memo[validatedCount] = `（${"；＿".repeat(validatedCount).slice(0, -1)}）`)
  );
};

const semi = async (req, res) => {
  res.setHeader("Content-type", "text/plain; charset=UTF-8");
  res.end(makeSad(parsePositiveInt(req.params.count) || 2));
};

module.exports = router(get("/:count", semi), get("/*", semi));
