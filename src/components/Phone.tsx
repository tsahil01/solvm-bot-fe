export function Phone() {
    return <div className="relative mx-auto w-[280px] h-[580px]">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[40px] border bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            {/* Phone screen */}
            <div className="absolute inset-y-0 inset-x-0 bg-[#f8f3e1] dark:bg-[#e8e2cd] overflow-hidden">
                {/* Phone content/screenshot mockup */}
                <div className="absolute inset-0 p-5 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div className="w-24 h-4 bg-[#e8e2cd] dark:bg-[#d8d2bd] rounded-md"></div>
                        <div className="flex space-x-1">
                            <div className="w-4 h-4 rounded-full bg-[#e8e2cd] dark:bg-[#d8d2bd]"></div>
                            <div className="w-4 h-4 rounded-full bg-[#e8e2cd] dark:bg-[#d8d2bd]"></div>
                        </div>
                    </div>
                    <div className="w-full bg-[#f8f3e1] dark:bg-[#e8e2cd] rounded-xl shadow-sm my-auto">
                        <img
                            src="solvm-9-16.png"
                            alt="Solvm Telegram"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#e8e2cd] dark:bg-[#d8d2bd] rounded-lg rotate-12 shadow-lg z-[-1]"></div>
        <div className="absolute top-1/4 -left-6 w-12 h-12 bg-[#7d5ba6] dark:bg-[#6b4d91] rounded-lg -rotate-12 shadow-lg z-[-1]"></div>
    </div>
}