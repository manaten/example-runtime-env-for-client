module.exports = {
  "*": "prettier --write --ignore-unknown",

  // see https://www.gaji.jp/blog/2021/12/16/8810/
  "*.{js,jsx,ts,tsx,mjs}": (files) =>
    `next lint --fix --file ${files
      .map((f) => f.split(process.cwd())[1])
      .join(" --file ")}`,
};
