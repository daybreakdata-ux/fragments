import { useEffect, useState } from 'react'
import Logo from './logo'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <Logo style="KODEai" width={120} height={120} />
      <div className="mt-6">
        <span className="loader animate-spin block w-10 h-10 border-4 border-t-primary border-gray-300 rounded-full"></span>
      </div>
    </div>
  )
}

// Add this CSS to your global styles or Tailwind config:
// .loader { border-top-color: #6366f1; }
