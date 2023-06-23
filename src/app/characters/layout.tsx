export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <h1 className="text-center mt-8 text-2xl font-semibold">Characters</h1> */}
      {children}
    </section>
  );
}
