QUnit.test("test_binary_search arr null", function (assert) {
  let arr = null;
  let item = 5;
  let act = binarySearch(arr, item);
  let exp = null;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr 0", function (assert) {
  let arr = [];
  let item = 5;
  let act = binarySearch(arr, item);
  let exp = null;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr 1", function (assert) {
  let arr = [5];
  let item = 5;
  let act = binarySearch(arr, item);
  let exp = 0;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr 2", function (assert) {
  let arr = [2, 5];
  let item = 5;
  let act = binarySearch(arr, item);
  let exp = 1;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr many", function (assert) {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let item = 5;
  let act = binarySearch(arr, item);
  let exp = 4;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr negative 1", function (assert) {
  let arr = [-5];
  let item = -5;
  let act = binarySearch(arr, item);
  let exp = 0;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr negative 2", function (assert) {
  let arr = [-5, -3];
  let item = -5;
  let act = binarySearch(arr, item);
  let exp = 0;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search arr negative many", function (assert) {
  let arr = [-10, -9, -8, -6, -5, -4, -1];
  let item = -4;
  let act = binarySearch(arr, item);
  let exp = 5;
  assert.equal(act, exp);
});

QUnit.test("test_binary_search item not in array", function (assert) {
  let arr = [-10, -9, -8, -6, -5, -4, -1];
  let item = 0;
  let act = binarySearch(arr, item);
  let exp = null;
  assert.equal(act, exp);
});
