import Skeleton from '../components/skeleton';

export default function Loader({ spinner = false }: { spinner?: boolean }) {
  if (spinner === true) {
    return (
      <div className='grid items-center place-content-center min-h-[100vh]'>
        <div
          className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center gap-y-4 pt-36 p-4'>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
