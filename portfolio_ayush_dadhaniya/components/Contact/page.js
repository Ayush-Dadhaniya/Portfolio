'use client';  // Add this directive at the top of your file

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Set up Supabase client
const supabase = createClient('https://tgxprmmzpuavixdiiesp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRneHBybW16cHVhdml4ZGlpZXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NzA5NzQsImV4cCI6MjA2MTM0Njk3NH0.bRddq57CW6dNY7wWqR9vXU8NTYvoyRGsYjkZ9umnKt0');

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Insert data into Supabase
            const { data, error } = await supabase
                .from('contacts')  // 'contacts' is the table name
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                    },
                ]);

            if (error) throw error;

            // Reset form after successful submission
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-black text-white flex-wrap flex flex-col items-center p-10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
                Let's <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Connect</span>
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="p-3 bg-gray-800 text-white rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="p-3 bg-gray-800 text-white rounded-md"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                        className="p-3 bg-gray-800 text-white rounded-md"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white font-bold"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
};

export default Contact;
