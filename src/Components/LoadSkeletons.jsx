export function LoadSkeleton() {
  const cards = [1, 2, 3, 4, 6, 7]

  return (
    <section className='pl-12 pr-12 w-full h-full grid gap-5 grid-cols-autoFit  justify-center items-center'>
      {cards.map((_, index) => {
        return (
          <article
            key={index}
            className='z-40 relative overflow-hidden backdrop-blur-lg hover:shadow-none transition-transform group h-96 w-[290px] shadow-scaleDown bg-zinc-100 rounded-lg flex gap-2 flex-col justify-between pb-2 mb-4'
            aria-label='tile'>
            <div className='grid grid-cols-autoFit items-center justify-between'>
              <div className='cursor-pointer w-full animate-skeleton h-52 p-2 bg-zinc-300 rounded-t-lg flex flex-col'></div>
              <button className='absolute left-4 z-50 bottom-32 flex justify-center items-center w-12 '></button>
            </div>

            <div className='flex flex-col items-start justify-around pl-3 gap-2 h-14'>
              <div className='justify-center animate-skeleton animation-skeleton text-center w-32 h-3 bg-zinc-300 rounded-lg pl-2 pr-2'></div>

              <div className='flex items-center bg-zinc-300 animation-skeleton w-20 h-3 rounded-lg mt-[-10px] gap-2'></div>
            </div>

            <div className='w-full flex flex-col items-center justify-around'>
              <div className='w-full flex justify-around items-center'>
                <div className='rounded-lg animate-skeleton w-14 h-3 bg-zinc-300'></div>
                <button className='w-20 h-6 pl-3 pr-3 text-sm flex items-center gap-2 animate-skeleton rounded-lg bg-zinc-300 p-2'></button>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}
