import React from 'react'
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {

    const { children } = props;

    return (
        <div className='relative flex flex-col min-h-screen text-white bg-slate-900 '>
            <Header />
            <main className="flex flex-col flex-1 p-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}
