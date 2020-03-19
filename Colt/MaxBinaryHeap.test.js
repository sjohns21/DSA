const MaxBinaryHeap = require("./MaxBinaryHeap")

test('insert', () => {
  const b = new MaxBinaryHeap([41,39,33,18,27,12])
  b.insert(55)
  expect(b.arr).toEqual([55,39,41,18,27,12,33]);
  b.insert(1)
  expect(b.arr).toEqual([55,39,41,18,27,12,33,1]);
});

test('extractMax', () => {
  const a = new MaxBinaryHeap([41,39,33,18,27,12])
  expect(a.extractMax()).toEqual(41)
  expect(a.arr).toEqual([39,27,33,18,12]);

  const b = new MaxBinaryHeap([55,39,41,18,27,12,33])
  expect(b.extractMax()).toEqual(55)
  expect(b.arr).toEqual([41,39,33,18,27,12])
  expect(b.extractMax()).toEqual(41)
  expect(b.arr).toEqual([39,27,33,18,12])
  expect(b.extractMax()).toEqual(39)
  expect(b.arr).toEqual([33,27,12,18])
  expect(b.extractMax()).toEqual(33)
  expect(b.arr).toEqual([27,18,12])
  expect(b.extractMax()).toEqual(27)
  expect(b.arr).toEqual([18,12])
  expect(b.extractMax()).toEqual(18)
  expect(b.arr).toEqual([12])
  expect(b.extractMax()).toEqual(12)
  expect(b.arr).toEqual([])
});
