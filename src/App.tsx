import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Header } from "./components/header";
import { Phone } from "./components/Phone";
import { FaServer, FaWallet, FaTelegram, FaGithub } from "react-icons/fa";

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
        <div className="relative overflow-hidden min-h-svh bg-[#f8f3e1]/10 dark:bg-[#433f35]">
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
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e8e2cd] dark:bg-[#7d5ba6]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d8d2bd] dark:bg-[#6b4d91]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
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
                            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-[#7d5ba6]/20 bg-[#7d5ba6]/10 dark:bg-[#7d5ba6]/20 dark:border-[#7d5ba6]/30">
                                <span className="text-xs font-medium text-[#7d5ba6] dark:text-[#e8e2cd]">
                                    New on Solana
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#5d493d] dark:text-[#f8f3e1]">
                                Rent Cloud VMs with <br />
                                <span className="text-[#7d5ba6] dark:text-[#a287c9]">Solana</span> on Telegram
                            </h1>
                            <p className="text-lg text-[#5d493d]/80 dark:text-[#e8e2cd]/80 mb-8 max-w-xl">
                                Access powerful GCP virtual machines instantly through our Telegram bot. Pay with Solana cryptocurrency, choose your configuration, and get started in minutes.
                            </p>

                            <div className="mb-8 grid md:grid-cols-3 gap-4 text-left">
                                <div className="flex flex-col gap-2 p-4 rounded-lg border border-[#d8d2bd] dark:border-[#5d493d]/30 bg-[#f8f3e1]/50 dark:bg-[#433f35]/50">
                                    <div className="bg-[#7d5ba6]/10 dark:bg-[#7d5ba6]/20 p-2 rounded-md w-fit">
                                        <FaTelegram className="text-[#7d5ba6] dark:text-[#a287c9] h-5 w-5" />
                                    </div>
                                    <h3 className="font-medium text-[#5d493d] dark:text-[#f8f3e1]">Telegram Bot</h3>
                                    <p className="text-sm text-[#5d493d]/80 dark:text-[#e8e2cd]/80">Rent VMs with simple commands in our user-friendly Telegram interface</p>
                                </div>

                                <div className="flex flex-col gap-2 p-4 rounded-lg border border-[#d8d2bd] dark:border-[#5d493d]/30 bg-[#f8f3e1]/50 dark:bg-[#433f35]/50">
                                    <div className="bg-[#7d5ba6]/10 dark:bg-[#7d5ba6]/20 p-2 rounded-md w-fit">
                                        <FaWallet className="text-[#7d5ba6] dark:text-[#a287c9] h-5 w-5" />
                                    </div>
                                    <h3 className="font-medium text-[#5d493d] dark:text-[#f8f3e1]">Solana Payments</h3>
                                    <p className="text-sm text-[#5d493d]/80 dark:text-[#e8e2cd]/80">Fast, low-fee cryptocurrency payments with immediate verification</p>
                                </div>

                                <div className="flex flex-col gap-2 p-4 rounded-lg border border-[#d8d2bd] dark:border-[#5d493d]/30 bg-[#f8f3e1]/50 dark:bg-[#433f35]/50">
                                    <div className="bg-[#7d5ba6]/10 dark:bg-[#7d5ba6]/20 p-2 rounded-md w-fit">
                                        <FaServer className="text-[#7d5ba6] dark:text-[#a287c9] h-5 w-5" />
                                    </div>
                                    <h3 className="font-medium text-[#5d493d] dark:text-[#f8f3e1]">Instant VM Access</h3>
                                    <p className="text-sm text-[#5d493d]/80 dark:text-[#e8e2cd]/80">Choose from small, medium, or large configurations with secure SSH access</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="rounded-md px-6 bg-[#7d5ba6] hover:bg-[#6b4d91] text-white"
                                    onClick={() => window.open("https://t.me/solvmbot", "_blank")}>
                                    Start Bot on
                                    <FaTelegram className="ml-1 h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-md px-6 border-[#d8d2bd] text-[#5d493d] hover:bg-[#e8e2cd]/50 dark:border-[#7d5ba6]/30 dark:text-[#e8e2cd] dark:hover:bg-[#433f35]/80">
                                    Github
                                    <FaGithub className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                            <div className="mt-5 flex items-center space-x-4 text-sm text-[#5d493d]/70 dark:text-[#e8e2cd]/70 justify-center lg:justify-start">
                                <span>
                                    Try it now :)
                                </span>
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
