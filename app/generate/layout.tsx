import TopBar from './navbar';

export const metadata = { title: '' };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}
