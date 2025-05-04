import { Button } from "./ui/button";

export function Header() {
    return (< header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm z-20 border-b border-slate-200 dark:border-slate-800" >
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold text-slate-900 dark:text-white">Solana VM</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Features</a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Pricing</a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Documentation</a>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">About</a>
                </nav>
                <Button variant="outline" size="sm" className="rounded-full">
                    Try it out
                    
                </Button>
            </div>
        </div>
    </header >
    )
}