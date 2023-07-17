import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <Link href="/">
          <button
            type="submit"
            className="bg-black/[0.9] hover:bg-black/[0.7] text-white font-medium py-2 px-4 rounded"
          >
            Submit
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
