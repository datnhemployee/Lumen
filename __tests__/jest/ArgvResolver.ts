type Argv = {name: string; value: string};

const NAME = {
  SUIT: '--suit',
};

const getArgvList = () =>
  process.argv.slice(1).reduce<Argv[]>((args, argAndValue: string) => {
    const splitted = argAndValue.split('=');
    const name = splitted?.[0];
    const value = splitted?.[1];
    return [...args, {name, value}];
  }, []);

const select = (name: string) => {
  const argvList = getArgvList();
  return argvList.find?.(arg => arg.name === name);
};

const checkRequired = (requiredArgvNameList: string[] = []) => {
  for (let i = 0; i < requiredArgvNameList.length; i++) {
    const requiredArgv = select(requiredArgvNameList[i]);
    if (!requiredArgv?.value) return false;
  }
  return true;
};

const Argv = {select, checkRequired, NAME};

export default Argv;
