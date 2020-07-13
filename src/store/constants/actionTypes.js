import asynchronousActions from './asynchronousActions';
import synchronousActions from './synchronousActions';

const synchronousConstants = synchronousActions.reduce((acc, name) => {
  acc[name] = name;

  return acc;
}, {});

const asynchronousConstants = asynchronousActions.reduce((acc, name) => {
  acc[`${name}_REQUEST`] = `${name}_REQUEST`;
  acc[`${name}_SUCCESS`] = `${name}_SUCCESS`;
  acc[`${name}_FAILURE`] = `${name}_FAILURE`;

  return acc;
}, {});

export default {
  ...asynchronousConstants,
  ...synchronousConstants,
};
