type Claim = {
  id: string;
  amount: number;
};

type Insurer = {
  id: string;
  balance: number;
};

type PayoutTransaction = {
  claimId: string;
  insurerId: string;
  amount: number;
};

const claims: Claim[] = [
  { id: 'a', amount: 100 },
  { id: 'b', amount: 50 },
  { id: 'c', amount: 40 },
  { id: 'd', amount: 60 },
  { id: 'e', amount: 20 },
  { id: 'f', amount: 90 },
  { id: 'g', amount: 120 },
  { id: 'h', amount: 30 },
];

const insurers: Insurer[] = [
  { id: 'A', balance: 250 },
  { id: 'B', balance: 250 },
  { id: 'C', balance: 100 },
];

const getInsurerId = (insurers: Insurer[], amount: number): string => {
  const insurerIdx = insurers.findIndex((insurer) => insurer.balance > 0);

  if (insurerIdx === -1) {
    return '';
  }

  const insurer = insurers[insurerIdx];

  if (insurer.balance >= amount) {
    insurer.balance -= amount;
    return insurer.id;
  } else {
    const diff = amount - insurer.balance;

    insurer.balance = 0;

    const nextId = getInsurerId(insurers, diff);

    return nextId ? `${insurer.id}, ${nextId}` : '';
  }
};

const getPayoutTransactions = (
  claims: Claim[],
  insurers: Insurer[]
): PayoutTransaction[] => {
  const internalInsurers = insurers.slice();

  const result = claims.reduce<PayoutTransaction[]>((acc, curr) => {
    const insurerId = getInsurerId(internalInsurers, curr.amount);

    if (!insurerId) {
      return acc;
    }

    const payoutTransaction: PayoutTransaction = {
      claimId: curr.id,
      insurerId: insurerId,
      amount: curr.amount,
    };

    acc.push(payoutTransaction);
    return acc;
  }, []);

  return result;
};

console.log(getPayoutTransactions(claims, insurers));
