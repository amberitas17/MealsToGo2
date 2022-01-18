import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KInl3DjWckaysTr5WSh41ZYXbg0C5eqPQQWarjhh6206b0X3CE3cqCpj5GqmPsAnOIm8qettZgZpU0ywQ1l3EW600sjuFISn9"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
