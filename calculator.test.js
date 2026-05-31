const { add, subtract, multiply, division } = require('./calculator');

function runTests() {
  // Test 1 — basic addition
  const result1 = add(3, 5);
  if (result1 === 8) {
    console.log('✓ Test 1 passed: add(3, 5) = 8');
  } else {
    console.error('✗ Test 1 failed: expected 8, got ' + result1);
    process.exit(1);
  }

  // Test 2 — negative numbers
  const result2 = add(-2, 4);
  if (result2 === 2) {
    console.log('✓ Test 2 passed: add(-2, 4) = 2');
  } else {
    console.error('✗ Test 2 failed: expected 2, got ' + result2);
    process.exit(1);
  }

    // Test 3 — subtractive numbers
  const result3 = subtract(10, 4);
  if (result3 === 6) {
    console.log('✓ Test 2 passed: subtract(10, 4) = 6');
  } else {
    console.error('✗ Test 2 failed: expected 6, got ' + result3);
    process.exit(1);
  }

    // Test 4 — multiply numbers
  const result4 = multiply(10, 4);
  if (result4 === 40) {
    console.log('✓ Test 2 passed: multiply(10, 4) = 40');
  } else {
    console.error('✗ Test 2 failed: expected 40, got ' + result3);
    process.exit(1);
  }

    // Test 5 — divide numbers
  const result5 = division(2, 10);
  if (result5 === 5) {
    console.log('✓ Test 2 passed: divide(2, 10) = 5');
  } else {
    console.error('✗ Test 2 failed: expected 5, got ' + result3);
    process.exit(1);
  }

  console.log('\nAll tests passed!');
}

runTests();