import classNames from 'classnames';

const createBEM = namespace => {
  return {
    create: blockName => {
      let block = blockName;

      if (typeof namespace === 'string') {
        block = `${namespace}-${blockName}`;
      }

      return {
        b: (...more) => {
          return classNames(block, more);
        },
        e: (className, ...more) => {
          return classNames(`${block}__${className}`, more);
        },
        m: (className, ...more) => {
          return classNames(`${block}--${className}`, more);
        },
      };
    },
  };
};

export const bemNames = createBEM('bn');

export default bemNames;