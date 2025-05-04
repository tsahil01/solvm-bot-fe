import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Header } from "./components/header";
import { Phone } from "./components/Phone";
import { FaServer, FaWallet, FaTelegram } from "react-icons/fa";

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative overflow-hidden min-h-svh bg-white dark:bg-slate-950">
            <motion.div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                    backgroundSize: "200px",
                    x: mousePosition.x / 50,
                    y: mousePosition.y / 50,
                }}
            />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-300 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <Header />
            <div className="container mx-auto px-4 py-32 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mx-auto ">

                    <div className="lg:w-1/2 text-center lg:text-left mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-purple-200 bg-purple-50 dark:bg-purple-500/10 dark:border-purple-500/20">
                                <span className="text-xs font-medium text-purple-600 dark:text-purple-300">
                                    New on Solana
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                                Rent Cloud VMs with <br />
                                <span className="text-purple-600 dark:text-purple-400">Solana</span> on Telegram
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
                                Access powerful GCP virtual machines instantly through our Telegram bot. Pay with Solana cryptocurrency, choose your configuration, and get started in minutes.
                            </p>
                            
                            <div className="mb-8 grid md:grid-cols-3 gap-4 text-left">
                                <div className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-md w-fit">
                                        <FaTelegram className="text-purple-500 h-5 w-5" />
                                    </div>
                                    <h3 className="font-medium text-slate-900 dark:text-white">Telegram Bot</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Rent VMs with simple commands in our user-friendly Telegram interface</p>
                                </div>
                                
                                <div className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-md w-fit">
                                        <FaWallet className="text-purple-500 h-5 w-5" />
                                    </div>
                                    <h3 className="font-medium text-slate-900 dark:text-white">Solana Payments</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Fast, low-fee cryptocurrency payments with immediate verification</p>
                                </div>
                                
                                <div className="flex flex-col gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-md w-fit">
                                        <FaServer className="text-purple-500 h-5 w-5" />
                                    </div>
                                    <h3 className="font-medium text-slate-900 dark:text-white">Instant VM Access</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Choose from small, medium, or large configurations with secure SSH access</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="rounded-md px-6 bg-purple-600 hover:bg-purple-700 text-white">
                                    Start Bot on Telegram
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-md px-6 border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800">
                                    View Documentation
                                </Button>
                            </div>
                            <div className="mt-8 flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 justify-center lg:justify-start">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-${200 + i * 100} dark:bg-slate-${900 - i * 100}`}></div>
                                    ))}
                                </div>
                                <span>Trusted by developers worldwide</span>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Phone />
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default App
