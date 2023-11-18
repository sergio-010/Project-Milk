import { Sidebar } from "../../../components";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <section className="w-full h-full grow overflow-y-auto">
        {children}
      </section>
    </div>
  );
};
