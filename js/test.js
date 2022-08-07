function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  totalSpent = 5000;

  let discount;
  // Change code below this line
  switch (totalSpent) {
    case totalSpent >= 5000:
      discount = GOLD_DISCOUNT;
      break;

    case totalSpent >= 2000 && totalSpent < 5000:
      discount = SILVER_DISCOUNT;
      break;

    case totalSpent >= 5000 && totalSpent < 2000:
      discount = BRONZE_DISCOUNT;
      break;

    case totalSpent < 5000:
      discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
}

console.log(totalSpent);
