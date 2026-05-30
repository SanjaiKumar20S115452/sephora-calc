const { add } = require('./calculator');

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

  console.log('\nAll tests passed!');
}

runTests();