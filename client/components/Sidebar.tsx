import { LayoutGrid, ListChecks, Settings, BarChart3, Bell, BookOpen, ShieldAlert, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutGrid, label: 'Dashboard', href: '/' },
  { icon: ShieldAlert, label: 'Risks', href: '/', active: true },
  { icon: ListChecks, label: 'Mitigations', href: '/' },
  { icon: BarChart3, label: 'Reports', href: '/' },
  { icon: BookOpen, label: 'Documentation', href: '/' },
];

const bottomItems = [
  { icon: Bell, label: 'Notifications', href: '/' },
  { icon: Settings, label: 'Settings', href: '/' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold text-sidebar-foreground">ERM</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.active;
          return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="px-3 py-4 border-t border-sidebar-border space-y-2">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="px-3 py-4 border-t border-sidebar-border">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
