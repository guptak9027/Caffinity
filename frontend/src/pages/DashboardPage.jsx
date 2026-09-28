import Navbar from '../components/Navbar'
import bgImage from '../assets/dashboard-bg.jpg'

function DashboardPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay so text stays readable over the image */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <Navbar />

        <div className="px-8 py-12">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back 👋</h2>
          <p className="text-gray-300 mb-8">Here's what's happening across your cafeterias.</p>

          {/* Placeholder cards - we'll wire real data here later */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 text-sm">Available Seats</p>
              <p className="text-3xl font-bold text-white mt-1">128</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 text-sm">Your Reservations</p>
              <p className="text-3xl font-bold text-white mt-1">2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <p className="text-gray-300 text-sm">Waitlist Position</p>
              <p className="text-3xl font-bold text-white mt-1">—</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage