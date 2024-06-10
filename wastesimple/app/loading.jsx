import "./globals.css"
export default function Loading() {
  return (
    <div className="fixed inset-0 flex min-h-screen items-center justify-center bg-white bg-opacity-75">
      <div className="loader"></div>
    </div>
  );
}
