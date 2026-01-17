import Image from 'next/image'

export default function Home() {
  return (
    <section className='min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/*Left content*/}
        <div>
          <p className='text-sm tracking-widest text-gray-500 uppercase mb-4'>YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</p>
          <h2 className='text-4xl lg:text-5xl font-bold leading-tight mb-6'>Discover what's possible with 3D printing</h2>
          <p className='text-gray-600 text-lg mb-8 max-w-md'>Join our community of creators and explore a vast library of user-submitted models.</p>
          <button className='border border-gray-900 px-6 py-3 text-sm font-medium uppercase hover:bg-gray-900 hover:text-white transition'>Browse Models</button>
        </div>
        {/*Right content*/}
        <div className='flex justify-center'>
          <Image
          src="/big-picture.png"
          alt="Big Picture"
          width={520}
          height={520}
          className='object-contain'
          />
        </div>
      </div>
    </section>
  )
}