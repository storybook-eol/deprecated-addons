const babelTransformer = require('./babel-jest');

module.exports.process = function transform(src, path, config, transformOptions) {
  const tsResult = src;
  const jsPath = path.replace('.ts', '.js');
  const source = typeof tsResult === 'string' ? tsResult : tsResult.code;

  return babelTransformer.process(source, jsPath, config, transformOptions);
};
