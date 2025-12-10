export function Footer() {
    return (
        <footer className="py-12 border-t border-zinc-900 bg-zinc-950 text-center text-sm text-zinc-600">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <span className="text-2xl font-black italic tracking-tighter text-zinc-800 hover:text-primary-500 transition-colors cursor-default">
                        プラスコミット
                    </span>
                </div>
                <p className="font-medium uppercase tracking-wider">&copy; {new Date().getFullYear()} Plus Commit. All rights reserved.</p>
            </div>
        </footer>
    )
}
