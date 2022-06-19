export default function FullSection({ children, props }) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-3">
      {children}
    </section>
  );
}
