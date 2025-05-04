export function Phone() {
    return <div className="relative mx-auto w-[280px] h-[580px]">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[40px] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            {/* Phone screen */}
            <div className="absolute inset-y-0 inset-x-0 bg-slate-50 dark:bg-slate-800 overflow-hidden">
                {/* Phone content/screenshot mockup */}
                <div className="absolute inset-0 p-5 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                        <div className="flex space-x-1">
                            <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                            <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        </div>
                    </div>
                    <div className="w-full p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm mb-4">
                        <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-700 rounded-full mb-2"></div>
                        <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="w-full p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm mb-4">
                        <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-700 rounded-full mb-2"></div>
                        <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="w-full h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg"></div>
                </div>
            </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg rotate-12 shadow-lg z-[-1]"></div>
        <div className="absolute top-1/4 -left-6 w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg -rotate-12 shadow-lg z-[-1]"></div>
    </div>
}