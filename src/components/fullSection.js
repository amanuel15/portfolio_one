export default function FullSection({ children, props, id }) {
  return (
    <section
      className="min-h-screen flex flex-col justify-center py-3 border-b-2 border-slate-600"
      id={id}
    >
      {children}
    </section>
  );
}
