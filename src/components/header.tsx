import { FaTelegram } from "react-icons/fa";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-[#f8f3e1]/80 dark:bg-[#433f35]/80 backdrop-blur-sm z-20 border-b border-[#d8d2bd] dark:border-[#5d493d]/30">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-[#5d493d] dark:text-[#f8f3e1]">Solana VM</span>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full border-[#7d5ba6]/30 text-[#7d5ba6] dark:text-[#a287c9] dark:border-[#7d5ba6]/30 hover:bg-[#7d5ba6]/10"
                        onClick={() => window.open("https://t.me/solvmbot", "_blank")}>
                        Try it out
                        <FaTelegram className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    )
}