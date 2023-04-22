```flow
st=>start: 0.Start
input=>inputoutput: 1.Input size, sizeName, opts.parseNum
isParseNum=>condition: 2.!(opts.parseNum)
returnSize=>inputoutput: 3.return size[sizeName];
defineNumSize=>operation: 4.numSize =
    !size[sizeName] || size[sizeName] < DEFAULT_SIZE
      ? DEFAULT_SIZE
      : size[sizeName];
returnNumSize=>inputoutput: 5.return numSize;
e=>end: 6.End

st->input->isParseNum(yes)->returnSize->e
st->input->isParseNum(no)->defineNumSize->returnNumSize->e
```
