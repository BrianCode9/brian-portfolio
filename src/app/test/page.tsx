'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/ui/sidebar'

export default function TestPage() {
    const [count, setCount] = useState(0)

    return (
        <main className="min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-6">Component Testing Page</h1>

            <div className="space-y-8">
                <Sidebar />
                <section className="p-4 border rounded-lg">
                    <h2 className="text-xl mb-4">Test Component 1</h2>
                    <div className="bg-gray-100 p-4 rounded">
                        {/* Add your components here */}
                    </div>
                </section>

                {/* Add more sections as needed */}
            </div>
        </main>
    )
}