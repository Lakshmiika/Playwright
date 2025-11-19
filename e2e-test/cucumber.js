module.exports = {
  default: {
    require: ["./step-definition/*.steps.js"],
    format: ["progress"],
    paths: ["./features/*.feature"],
    timeout: 60000,
    tags: process.env.TAGS || ""
  }
};
