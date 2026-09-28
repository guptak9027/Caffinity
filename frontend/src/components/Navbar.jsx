import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
   <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
  <span className="text-2xl">☕</span>
  <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
    Caffinity
  </span>
</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-red-500/80 transition-colors duration-200"
      >
        Logout
      </button>
    </nav>
  )
}

export default Navbar