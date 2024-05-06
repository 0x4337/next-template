import Image from 'next/image';

export default function BgShapes() {
  return (
    <div
      className="absolute inset-y-0  w-[1102px] h-[calc(100vh - 56px)] overflow-hidden left-1/2 -translate-x-1/2 -z-10 pointer-events-none blur-3xl opacity-50"
      // className="absolute inset-y-0  w-full h-[calc(100vh - 56px)] overflow-hidden left-1/2 -translate-x-1/2 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      {/* {Array.from({ length: 100 }).map((_, index) => (
        <Image
          key={index}
          src={`/images/abstracts/${String(index + 1).padStart(2, '0')}.png`}
          alt={`abstract ${index + 1}`}
          height={50}
          width={50}
          className={`absolute  -z-10 pointer-events-none`}
          style={{
            transform: `translate(-50%, -50%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))} */}

      <div className="absolute w-[960px] h-24 top-12 animate-[swing_8s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-indigo-600 before:-rotate-[42deg]" />
      <div className="absolute w-[960px] h-24 -top-12 -left-28 animate-[swing_15s_-1s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-white dark:before:via-indigo-400 before:-rotate-[42deg]" />
      <div className="absolute w-[960px] h-16 top-36 left-80 animate-[swing_7s_-2s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-white dark:before:via-indigo-400 before:-rotate-[42deg]" />
      <div className="absolute w-[960px] h-64 top-[820px] left-44 animate-[swing_10s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-indigo-600/30 dark:before:via-indigo-400/30 before:-rotate-[42deg]" />
      <div className="absolute w-[480px] h-12 top-[970px] left-[550px] animate-[swing_15s_-2s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-white dark:before:via-indigo-950 before:-rotate-[42deg]" />
      <div className="absolute w-[960px] h-16 top-[820px] left-24 animate-[swing_9s_-3s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-b before:from-transparent before:to-transparent before:via-white dark:before:via-indigo-900 before:-rotate-[42deg]" />
    </div>
  );
}
