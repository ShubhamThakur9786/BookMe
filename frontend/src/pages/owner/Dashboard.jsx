
function Dashboard() {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-violet-600">
        BUSINESS OVERVIEW
      </p>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Good morning, Alex 👋
      </h1>

      <p className="mt-2 text-slate-500">
        Here's what's happening with your business today.
      </p>

      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-10 text-center">
        <h2 className="text-lg font-semibold text-slate-700">
          Your dashboard starts here
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          We'll add revenue, appointments, analytics and business insights next.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
