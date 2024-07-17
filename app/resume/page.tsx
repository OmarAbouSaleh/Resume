import Head from 'next/head';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Head>
        <title>Omar Abou-Saleh - Resume</title>
        <meta name="description" content="Omar Abou-Saleh's professional resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Resume</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Software Development, Southern Alberta Institute of Technology</h3>
            <p className="text-gray-600">Diploma, 01/2023 – Present</p>
            <p className="text-gray-600">Calgary, Canada</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">High School Diploma, Centennial High School</h3>
            <p className="text-gray-600">2012 – 2014</p>
            <p className="text-gray-600">Calgary, Canada</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Professional Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">Sales Associate, Best Buy</h3>
            <p className="text-gray-600">2018 – Present</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Offered training and education services to help customers get the most out of their phones.</li>
              <li>Helped customers to set up their new phones and get them up and running smoothly.</li>
              <li>Provided troubleshooting support to help resolve phone issues quickly and efficiently.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Sales Associate, Bell</h3>
            <p className="text-gray-600">2016 – 2018</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Provided tailored recommendations based on individual customer needs.</li>
              <li>Helped customers make informed decisions about their phone purchases.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Python - Proficient</li>
            <li>C# - Familiar</li>
            <li>Java/TypeScript - Familiar</li>
            <li>IntelliJ</li>
            <li>MS Visual Studio</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
