import DashboardProvider from '@/components/dashboard/provider/DashboardProvider';
import Sidebar from '@/components/shared/Sidebar';

import { ReactNode } from 'react';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {

    return <div className='bg-white text-black/80'>
        <DashboardProvider>
            <Sidebar />
            <div className=' lg:ml-[275px] py-4 lg:py-8 px-3 lg:px-5 mt-16  lg:mt-2 min-h-screen lg:mr-4 xl:mr-6 flex-1'>
                {children}
            </div>
        </DashboardProvider>
    </div>

};

export default DashboardLayout;