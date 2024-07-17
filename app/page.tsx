import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Omar Abou-Saleh</title>
        <meta name="description" content="Omar Abou-Saleh's personal homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-8 py-16 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Omar Abou-Saleh
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">
          Aspiring Software Developer
        </h2>

        <div className="flex flex-col items-center">
          <Image
            src="/omar.jpg"
            alt="Omar Abou-Saleh"
            width={200}
            height={200}
            className="rounded-full border-4 border-gray-300 shadow-md"
          />
          <p className="mt-6 text-lg text-gray-700 text-center leading-relaxed">
            Hi, I&apos;m Omar Abou-Saleh, a student at Southern Alberta Institute of Technology with a passion for programming. I am excited to pursue a software development internship to further my knowledge and skills in the field. Currently proficient in Python and actively learning C#, Java, JavaScript, and TypeScript.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Connect with me:</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/omar-abou-saleh-576433265/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/OmarAbouSaleh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>

      <footer className="w-full h-24 flex items-center justify-center border-t mt-8">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-600"
        >
          Powered by{' '}
          <span className="ml-2">
            <Image src="/nextjs.svg" alt="Next.js Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
