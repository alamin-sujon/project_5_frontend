"use client"
import { selectUser } from '@/redux/feature/user/userReducer'
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DashboardProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const user = useAppSelector(selectUser)
    if (!user?.email) {
        router.push("/login")
        return null
    }
    return (
        <div>
            {children}
        </div>
    )
}
