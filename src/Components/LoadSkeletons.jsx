export function LoadSkeleton () {
  const cards = [1, 2, 3, 4, 6, 7]

  return (
    <section className='pl-12 pr-12 w-full h-full mt-6 grid gap-5 grid-cols-autoFit justify-center items-center'>
      {cards.map((_, index) => {
        return (
          <article
            key={index}
            className='z-40 relative overflow-hidden transition-transform group h-[331px] w-[220px] bg-dark rounded-lg flex gap-2 flex-col justify-between pb-2 mb-4'
            aria-label='tile'
          >
            <div className='grid grid-cols-autoFit items-center justify-between bg-primary'>
              <div className='w-full h-[178px] rounded-t-lg relative overflow-hidden flex'>
                <div className='animate-skeleton w-12 h-full blur-[15px] opacity-50 bg-neutral-800' />
              </div>
              <button className='absolute left-4 z-50 bottom-32 flex justify-center items-center w-12 ' />
            </div>

            <div className='flex flex-col items-start justify-around pl-3 gap-1 h-14'>
              <div>
                <div className='justify-center relative overflow-hidden text-center w-32 h-3 rounded-lg pl-2 pr-2 flex gap-2'>
                  <div className='animate-skeleton w-12 h-full blur-xl bg-neutral-300' />
                  <div className='animate-skeleton w-12 h-full blur-xl bg-neutral-300' />
                </div>
              </div>

              <div className='flex items-center relative overflow-hidden w-20 h-2 rounded-lg mb-1'>
                <div className='animate-skeleton blur-xl bg-neutral-300 h-full w-12' />
              </div>
              <div className='flex items-center relative overflow-hidden w-16 h-4 rounded-lg'>
                <div className='animate-skeleton w-12 h-full blur-xl bg-neutral-300' />
              </div>
            </div>

            <div className='w-full flex flex-col items-center justify-around'>
              <div className='w-full flex justify-between px-3 items-end'>
                <div className='rounded-lg pl-2 w-14 h-3 relative overflow-hidden  mb-1'>
                  <div className='animate-skeleton w-12 h-full blur-xl bg-neutral-300' />
                </div>
                <button className='w-20 h-6 pl-3 pr-3 text-sm flex relative overflow-hidden items-center gap-2 rounded-lg p-2'>
                  <div className='animate-skeleton w-12 h-full blur-xl bg-neutral-300' />
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
