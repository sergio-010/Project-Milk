interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="w-full h-screen flex ">
      <aside className="h-full w-full max-w-[300px]  bg-red-500 ">
        <h1>Dashboard</h1>
      </aside>
      <section className="w-full h-full grow">{children}</section>
    </main>
  );
};
