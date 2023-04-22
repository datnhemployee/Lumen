const toJSON = (): {[k: string]: any} => {
  const argvAsList = process.argv.slice(1) ?? [];
  const argvAsJSON = argvAsList.reduce?.((argv, nameAndValue) => {
    const splitted = nameAndValue.split('=');
    const name = splitted?.[0];
    const value = splitted?.[1];
    return {...argv, [name]: value};
  }, {});
  return argvAsJSON;
};

const select = (name: string, opts?: Partial<{isRequired: boolean}>) => {
  const argv = toJSON();
  const val = argv[name];
  if (typeof val === 'undefined' && opts?.isRequired) {
    throw new Error(
      `Option ${name} is required but receive 'undefined'.` +
        `\n\tPlease try again and include this option.`,
    );
  }
  return argv[name];
};

const Argv = {select, toJSON};

export default Argv;
