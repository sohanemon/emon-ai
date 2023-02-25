export const metadata = {
  title: 'Image Generation',
  description: 'Created by SohanEmon',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  );
}
