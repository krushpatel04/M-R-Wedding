export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen">
      <header className="flex justify-center items-center py-4 shrink-0">
        <h1 style={{ fontFamily: "var(--font-heading), cursive", color: "#9f2436", fontSize: "2rem" }}>
          Welcome to Monali and Rushil&apos;s Reception
        </h1>
      </header>
      <iframe
        src="/MR Seating Chart.pdf"
        className="flex-1 w-full"
        style={{ border: "none" }}
      />
    </main>
  );
}
