export const users = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    status: 'active',
    plan: 'Enterprise',
    lastActive: '2024-01-15',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Member',
    status: 'active',
    plan: 'Pro',
    lastActive: '2024-01-14',
  },
  {
    id: '3',
    name: 'Carol White',
    email: 'carol@example.com',
    role: 'Member',
    status: 'inactive',
    plan: 'Free',
    lastActive: '2024-01-10',
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@example.com',
    role: 'Admin',
    status: 'active',
    plan: 'Pro',
    lastActive: '2024-01-15',
  },
  {
    id: '5',
    name: 'Eva Martinez',
    email: 'eva@example.com',
    role: 'Viewer',
    status: 'active',
    plan: 'Free',
    lastActive: '2024-01-13',
  },
  {
    id: '6',
    name: 'Frank Wilson',
    email: 'frank@example.com',
    role: 'Member',
    status: 'active',
    plan: 'Enterprise',
    lastActive: '2024-01-15',
  },
  {
    id: '7',
    name: 'Grace Lee',
    email: 'grace@example.com',
    role: 'Member',
    status: 'pending',
    plan: 'Pro',
    lastActive: '2024-01-12',
  },
  {
    id: '8',
    name: 'Henry Taylor',
    email: 'henry@example.com',
    role: 'Viewer',
    status: 'active',
    plan: 'Free',
    lastActive: '2024-01-11',
  },
]

export const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    features: ['5 projects', '1 GB storage', 'Community support'],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Pro',
      'Unlimited storage',
      '24/7 support',
      'SSO/SAML',
      'Custom integrations',
      'SLA guarantee',
    ],
    popular: false,
  },
]

export const invoices = [
  {
    id: 'INV-001',
    date: '2024-01-01',
    amount: '$29.00',
    status: 'paid',
    plan: 'Pro',
  },
  {
    id: 'INV-002',
    date: '2023-12-01',
    amount: '$29.00',
    status: 'paid',
    plan: 'Pro',
  },
  {
    id: 'INV-003',
    date: '2023-11-01',
    amount: '$29.00',
    status: 'paid',
    plan: 'Pro',
  },
  {
    id: 'INV-004',
    date: '2023-10-01',
    amount: '$0.00',
    status: 'paid',
    plan: 'Free',
  },
]

export const featureUsage = [
  { name: 'API Calls', used: 8500, limit: 10000, unit: 'calls' },
  { name: 'Storage', used: 45, limit: 100, unit: 'GB' },
  { name: 'Team Members', used: 12, limit: 25, unit: 'seats' },
  { name: 'Projects', used: 18, limit: -1, unit: 'projects' },
]

export const onboardingSteps = [
  {
    id: 1,
    title: 'Create account',
    description: 'Set up your profile and preferences',
    completed: true,
  },
  {
    id: 2,
    title: 'Invite team',
    description: 'Add team members to your workspace',
    completed: true,
  },
  {
    id: 3,
    title: 'Connect integrations',
    description: 'Link your tools and services',
    completed: false,
  },
  {
    id: 4,
    title: 'Create first project',
    description: 'Start building with your team',
    completed: false,
  },
]
