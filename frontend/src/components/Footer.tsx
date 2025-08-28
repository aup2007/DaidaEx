export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="container py-6 text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
        <p>© {new Date().getFullYear()} DaidaEx. All rights reserved.</p>
        {/* <p className="text-gray-500">Built with React for the construction industry.</p> */}
      </div>
    </footer>
  )
}
