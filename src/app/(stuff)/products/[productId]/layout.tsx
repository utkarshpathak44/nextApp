export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-60 px-10 py-6">
      {children}
      <div>Featured products...</div>
      <div className="flex flex-row h-60 w-full bg-black rounded-md p-2 gap-2">
        <div className="w-30 h-30 rounded-md border border-white">product</div>
        <div className="w-30 h-30 rounded-md border border-white">product</div>
        <div className="w-30 h-30 rounded-md border border-white">product</div>
        <div className="w-30 h-30 rounded-md border border-white">product</div>
        <div className="w-30 h-30 rounded-md border border-white">product</div>
      </div>
    </div>
  );
}
