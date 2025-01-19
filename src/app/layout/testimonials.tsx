import Image from "next/image";
import Alex from "../../../public/alex.jpg";
import Sean from "../../../public/Sean.jpg";
import Katie from "../../../public/Katie.jpg";
import Ryan from "../../../public/Ryan.jpg";
import Mathew from "../../../public/Mathew.jpg";
import Linda from "../../../public/linda.jpg";

const testimonials = [
  {
    name: "Alex",
    username: "@alex",
    image: Alex,
    text: "With Proganize, I save hours every week. The AI-powered document chat feature is my favorite—I can quickly analyze and summarize medical texts and create practice quizzes for myself. It's been an essential tool for my busy schedule",
  },
  {
    name: "Bob",
    username: "@thisisbob",
    image: Sean,
    text: "Writing my thesis felt like an uphill battle until I started using Proganize. The AI-generated summaries and tailored flashcards helped me stay organized and focus on the core of my research. I wish I’d found this sooner!",
  },
  {
    name: "Kattie",
    username: "@kattieryie",
    image: Katie,
    text: "Studying for exams has always stressed me out, but Proganize made it simple and fun. The quizzes are interactive, and the AI even helped me understand tough topics better. My grades have improved so much!",
  },
  {
    name: "Max",
    username: "@maxcook",
    image: Mathew,
    text: "Proganize has been a total game-changer for my studies. I used to spend hours creating study materials, but now I can generate flashcards, quizzes, and summaries in seconds. It’s like having a personal tutor available 24/7!",
  },
  {
    name: "Ryan",
    username: "@iamRayan34",
    image: Ryan,
    text: "Balancing work and studying for certifications was tough until I started using Proganize. Now I can quickly summarize key topics and test myself with quizzes. It’s efficient, easy to use, and worth every penny.",
  },
  {
    name: "Linda",
    username: "@thisislinda",
    image: Linda,
    text: "Proganize is like a cheat code for learning. The AI tutor feels so personal, and the group study feature has made collaborating with my classmates a breeze. It’s everything I need in one place!",
  },
];

export default function Testimonials() {
  return (
    <div className='mx-auto py-32'>
      <h1 className='text-3xl font-bold tracking-tighter text-center md:text-5xl my-10'>
        Loved by Students and Professionals
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        What students and professionals say about Proganize from around the
        world
      </p>
      <div className='grid max-w-6xl mx-auto gap-8 md:grid-cols-3'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='p-6 bg-white shadow-md rounded-lg'>
            <p className='text-gray-700 mb-4'>{testimonial.text}</p>
            <div className='flex items-center'>
              <Image
                width={40}
                height={40}
                src={testimonial.image}
                alt={testimonial.name}
                className='h-10 w-10 rounded-full mr-3'
              />
              <div>
                <p className='font-bold'>{testimonial.name}</p>
                <p className='text-gray-500'>{testimonial.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
