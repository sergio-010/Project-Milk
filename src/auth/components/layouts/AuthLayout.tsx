interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <header className="w-full h-12 flex items-center justify-center bg-blue-500">
        Milk Deliveries
      </header>

      <main className="w-full h-full flex items-center justify-center mt-32">
        {children}
      </main>
    </div>
  );
};
