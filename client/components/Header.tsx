import { AlertCircle, TrendingUp, ShieldAlert } from 'lucide-react';

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

export function Header() {
  const stats: StatCard[] = [
    {
      label: 'Open Risks',
      value: 213,
      icon: <AlertCircle className="h-5 w-5" />,
      color: 'text-orange-500',
    },
    {
      label: 'High Priority High Priority',
      value: 23,
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'text-blue-500',
    },
    {
      label: 'Threats',
      value: 121,
      icon: <ShieldAlert className="h-5 w-5" />,
      color: 'text-yellow-500',
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Header Top Bar */}
      <div className="bg-card border-b border-border px-8 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Enterprise Risk Management</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0a.75.75 0 00-.75.75v.75h3v-.75a.75.75 0 00-.75-.75m0 0H9.75" />
            </svg>
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">U</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="bg-card px-8 py-6 border-b border-border grid grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className={`${stat.color} p-2 rounded-lg bg-muted`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
