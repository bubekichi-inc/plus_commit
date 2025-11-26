export function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 text-center text-sm text-zinc-500">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Plus Commit. All rights reserved.</p>
            </div>
        </footer>
    )
}
