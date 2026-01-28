import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { RisksTable } from '@/components/RisksTable';

export default function Index() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <RisksTable />
      </div>
    </div>
  );
}
