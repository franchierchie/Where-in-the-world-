import { Header } from "@/components"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="px-5 py-5 sm:px-20 sm:py-10 lg:px-30">
        { children }
      </div>
    </div>
  );
}