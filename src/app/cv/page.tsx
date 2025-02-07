"use client";

import React from "react";
import Image from "next/image";
import { FaCode, FaPaintBrush, FaServer, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

export default function CV() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 text-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
        <div className="text-center border-b border-gray-700 pb-4 mb-6">
        <Image src="/img/profil.png" alt="Profile Picture" width={150} height={150} className="mx-auto rounded-full border-4 border-blue-400" />
          <h1 className="text-4xl font-extrabold mt-4">Muhamad Farkhan Ainurrofiq</h1>
          <p className="text-blue-400">BackEnd Developer</p>
          <p className="mt-4 text-gray-300">Aku membangun Aplikasi berbasis website dengan skala and effisien yang bagus dengan teknologi terbaru</p>
        </div>
        <div className="space-y-6">
          <section className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-3">Profile</h2>
            <p className="text-gray-300">
              Saya mulai melakukan kegiatan yang bernama pemrograman ini di awal perkuliahan, awalnya saya mempelajari
              bahasa pemrograman php, dan lanjut ke framework nya yaitu codeigniter, dan laravel. Saya juga mempelajari
              JS pada backEnd dan frontEnd dengan beberapa library seperti React ataupun Express. 
            </p>
          </section>
          <section className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-3">Pengalaman</h2>
            <div>
              <h3 className="text-md font-medium">Pelajar</h3>
              <p className="text-gray-400">Ma&apos;soem University</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Membangun sebuah Aplikasi berbasis Dekstop </li>
                <li>Berkolaborasi bersama Mahasiswa lainnya</li>
              </ul>
            </div>
          </section>
          <section className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-3">Pendidikan</h2>
            <p className="text-gray-300">Rekayasa Perangkat Lunak - SMK Muthia Harapan Cicalengka</p>
            <p className="text-gray-300">Sistem Informasi - Ma&apos;soem University University, 2023</p>
          </section>
          <section className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript", "TypeScript", "React", "Laravel", "Node.js", "Tailwind CSS", "SQL"
              ].map((skill) => (
                <span key={skill} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </section>


        {/* Services Section */}
        <section className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4">Services</h2>
          <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2"><FaCode /> Web Development</li>
            <li className="flex items-center gap-2"><FaPaintBrush /> UI/UX Design</li>
            <li className="flex items-center gap-2"><FaServer /> API Development</li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Portfolios</h2>
          <p className="text-gray-300">cek project yang sedang saya kembangkan</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-600 hover:bg-blue-400 transition duration-500 p-4 rounded-lg text-center flex items-center justify-center gap-2"><FaProjectDiagram /> Project 1</div>
            <div className="bg-gray-600 hover:bg-blue-400 transition duration-500 p-4 rounded-lg text-center flex items-center justify-center gap-2"><FaProjectDiagram /> Project 2</div>
            <div className="bg-gray-600 hover:bg-blue-400 transition duration-500 p-4 rounded-lg text-center flex items-center justify-center gap-2"><FaProjectDiagram /> Project 3</div>
            <div className="bg-gray-600 hover:bg-blue-400 transition duration-500 p-4 rounded-lg text-center flex items-center justify-center gap-2"><FaProjectDiagram /> Project 4</div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2 mb-4">Contact</h2>
          <p className="text-gray-300">ayo kontak aku di:</p>
          <p className="mt-2 text-blue-400 flex items-center justify-center gap-2"><FaEnvelope /> testing@gmail.com</p>
          <code className="bg-gray-800 text-blue-300 p-2 rounded-lg block mt-2">+62 8123-4567-890</code>
        </section>
        </div>
      </div>
    </div>
  );
}
