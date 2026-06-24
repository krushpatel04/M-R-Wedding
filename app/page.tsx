export default function Home() {
  return (
    <main className="flex flex-col w-screen">
{[1, 2, 3, 4].map((n) => (
        <img
          key={n}
          src={`/M-R-Wedding/MR%20Seating%20Chart-${n}.png`}
          alt={`Seating chart page ${n}`}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </main>
  );
}
