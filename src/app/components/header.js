import React from 'react'
import Image from 'next/image'

export default function header() {
    return (
        <header className=''>
            <div className='container mx-auto max-sm:hidden'>
                <div className='top-header d-flex ml-auto py-3'>
                    <Image src='https://hyperlocalcd4.azureedge.net/-/media/images/feature/nexa/channel-specific-global-content/channel-settings/nexa-logo-top.ashx?modified=20180814143709' alt='Logo' className='ml-auto' width={150} height={16} />
                </div>
            </div>

            <div className='header-bottom bg-black py-3'>
                <div className='container mx-auto max-sm:px-5'>
                    <div className='flex items-center'>
                        <a href='#' className='max-sm:w-[100px]'>
                            <Image src='https://hyperlocalcd4.azureedge.net/-/media/images/feature/nexa/channel-specific-global-content/channel-settings/nexa-logo.ashx?modified=20180814143536' alt='Logo' width={150} height={27} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='header-bottom py-3 max-sm:hidden'>
                <div className='container mx-auto'>
                    <div className='flex items-center'>
                        <a href='#'>
                            Home
                        </a>
                        <div className='ml-auto space-x-2'>
                            <a href='#' className='text-black'>CHANGE LANGUAGE</a>
                            <a href='#' className='text-black'>English</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
