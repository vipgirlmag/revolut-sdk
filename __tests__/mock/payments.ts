export const transfer = {
  id: '62b61a4f-fb09-4e87-b0ab-b66c85f5485c',
  state: 'completed',
  created_at: '2017-06-21T11:22:11.0Z',
  completed_at: '2017-06-21T11:22:11.0Z'
}

export const payment = {
  id: 'd56dd396-523b-4613-8cc7-54974c17bcac',
  state: 'completed',
  created_at: '2017-10-01T10:10:10.0Z',
  completed_at: '2017-10-01T10:10:10.0Z'
}

export const scheduledPayment = {
  id: 'd56dd396-523b-4613-8cc7-54974c17bcac',
  state: 'created',
  created_at: '2017-10-01T10:10:10.0Z'
}

export const transaction = {
  id: '62b61a4f-fb09-4e87-b0ab-b66c85f5485c',
  type: 'transfer',
  request_id: 'e0cbf84637264ee082a848b',
  state: 'completed',
  created_at: '2017-10-10T12:00:00Z',
  updated_at: '2017-10-10T12:00:10Z',
  completed_at: '2017-10-10T12:00:10Z',
  legs: [
    {
      leg_id: '8bf591b9-e802-4e37-a5bb-f870603d8207',
      account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c',
      counterparty: {
        type: 'self',
        account_id: '5138z40d1-05bb-49c0-b130-75e8cf2f7693'
      },
      amount: -123.11,
      currency: 'EUR',
      explanation: 'From EUR source',
      description: 'Expenses funding'
    },
    {
      leg_id: '516b9146-9264-4bb5-936f-497469b5c44e',
      account_id: '5138z40d1-05bb-49c0-b130-75e8cf2f7693',
      counterparty: {
        type: 'self',
        account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c'
      },
      amount: 123.11,
      currency: 'EUR',
      explanation: 'To EUR target'
    }
  ]
}

export const transactions = [
  {
    id: '62b61a4f-fb09-4e87-b0ab-b66c85f5485c',
    type: 'transfer',
    request_id: 'e0cbf84637264ee082a848b',
    state: 'completed',
    created_at: '2017-10-10T12:00:00Z',
    updated_at: '2017-10-10T12:00:10Z',
    completed_at: '2017-10-10T12:00:10Z',
    legs: [
      {
        leg_id: '0485605a-6062-4820-981d-1736f4be0b2c',
        account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c',
        counterparty: {
          id: '5138z40d1-05bb-49c0-b130-75e8cf2f7693',
          type: 'revolut',
          account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c'
        },
        amount: -123.11,
        currency: 'EUR',
        explanation: 'To Blows & Wistles Co.',
        description: 'Payment for Blows & Wistles Co.'
      }
    ]
  },
  {
    id: '62b61a4f-fb09-4e87-b0ab-b66c85f5485c',
    type: 'transfer',
    request_id: 'e0cbf84637264ee082a848b',
    state: 'completed',
    created_at: '2017-10-10T12:00:00Z',
    updated_at: '2017-10-10T12:00:10Z',
    completed_at: '2017-10-10T12:00:10Z',
    legs: [
      {
        leg_id: '0485605a-6062-4820-981d-1736f4be0b2c',
        account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c',
        counterparty: {
          id: '5138z40d1-05bb-49c0-b130-75e8cf2f7693',
          type: 'revolut',
          account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c'
        },
        amount: -500.0,
        currency: 'EUR',
        explanation: 'To Blows & Wistles Co.',
        description: 'Payment for Blows & Wistles Co.'
      }
    ]
  },
  {
    id: '45e8730a-cb70-47fe-8944-0fed870d9586',
    type: 'transfer',
    request_id: 'e0cbf84637264ee082a848b',
    state: 'pending',
    created_at: '2017-10-10T12:00:00Z',
    updated_at: '2017-10-10T12:00:00Z',
    scheduled_for: '2017-10-15',
    legs: [
      {
        leg_id: '704ef03d-4cb3-4027-a7c5-d42f3b60395f',
        account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c',
        counterparty: {
          id: '5138z40d1-05bb-49c0-b130-75e8cf2f7693',
          type: 'revolut',
          account_id: 'bdab1c20-8d8c-430d-b967-87ac01af060c'
        },
        amount: -43.12,
        currency: 'EUR',
        explanation: 'To Blows & Wistles Co.',
        description: 'Payment for Blows & Wistles Co.'
      }
    ]
  }
]
