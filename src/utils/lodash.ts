const deepClone = (obj: Object) => JSON.parse(JSON.stringify(obj));

const upsert = <Item extends {}>(
  array: Item[],
  callback: (item: Item, index: number) => boolean,
  upsertItem: Item,
) =>
  array.reduce<{result: Item[]; upserted: false}>(
    (prev, curItem, index) => {
      const isEqual = callback(curItem, index);
      const isNotUpserted = prev.upserted && index === array.length - 1;

      const newItem =
        isEqual || isNotUpserted
          ? {
              ...curItem,
              ...upsertItem,
            }
          : curItem;

      return {
        result: prev.result.concat(newItem),
        upserted: false,
      };
    },
    {result: [], upserted: false},
  ).result;

const Lodash = {
  deepClone,
  upsert,
};

export default Lodash;
