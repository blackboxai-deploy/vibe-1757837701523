"use client";

import { useState } from "react";

// Mock Instagram posts data (in real implementation, this would come from Instagram API)
const mockInstagramPosts = [
  {
    id: "1",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f03be523-f557-4126-94c7-76f3e6eb6c2a.png",
    caption: "Mathematics class in progress! These bright minds are solving problems with such enthusiasm. Your donations made this classroom possible. 📚✏️ #EducationForAll #MuskurahatFoundation",
    likes: 245,
    comments: 18,
    date: "2 days ago"
  },
  {
    id: "2", 
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/261bf400-41a7-419c-a0dc-634d15ab41b3.png",
    caption: "Nutritious lunch time! Thanks to your generous donations, these children receive healthy meals every day. A well-fed child learns better! 🍽️❤️ #NutritionMatters #HungerFree",
    likes: 312,
    comments: 24,
    date: "4 days ago"
  },
  {
    id: "3",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/120e4239-0acc-4bd5-b750-798acabc7df1.png",
    caption: "Playtime is learning time! Physical activities help in overall development. These smiles are priceless and made possible by supporters like you! 🏃‍♀️⚽ #ChildhoodJoy #HolisticDevelopment",
    likes: 189,
    comments: 12,
    date: "6 days ago"
  },
  {
    id: "4",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c5bb3e0-8127-40e6-b73f-790e83ec0f34.png",
    caption: "Art class unleashing creativity! Every child is an artist. Your support helps us provide art supplies and nurture their creative talents. 🎨🖌️ #ArtEducation #CreativeMinds",
    likes: 201,
    comments: 15,
    date: "1 week ago"
  },
  {
    id: "5",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d804388b-1105-4739-bc59-7d5d54907c2c.png",
    caption: "Story time at our library! Reading opens doors to infinite possibilities. Thanks to book donations, these children explore new worlds every day. 📖🌟 #ReadingIsFun #LiteracyProgram",
    likes: 267,
    comments: 21,
    date: "1 week ago"
  },
  {
    id: "6",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2d3fea44-d9c2-4f93-b433-a0e7dfca00f6.png",
    caption: "Graduation day celebration! 🎓 These children completed their primary education successfully. From struggling to thriving - your donations made this transformation possible! #GraduationDay #SuccessStory",
    likes: 445,
    comments: 38,
    date: "2 weeks ago"
  }
];

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<typeof mockInstagramPosts[0] | null>(null);

  const handlePostClick = (post: typeof mockInstagramPosts[0]) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-green-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Follow our journey on Instagram to see the daily impact of your donations
          </p>
          <a
            href="https://instagram.com/muskurahat_foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-xl">📷</span>
            Follow @muskurahat_foundation
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockInstagramPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption.split('.')[0]}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75cb7491-e447-4386-bf10-094bfb396320.png";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <span>❤️</span>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>💬</span>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Info */}
              <div className="p-4">
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-3">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Stay Connected with Our Mission
            </h3>
            <p className="text-lg mb-6 opacity-95">
              Follow us on social media to see how your donations create smiles and change lives every day
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/muskurahat_foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <span>📷</span>
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com/muskurahatfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <span>📘</span>
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com/muskurahat_ngo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <span>🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal for Post Details */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
                >
                  ✕
                </button>
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption.split('.')[0]}
                  className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    {selectedPost.caption}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{selectedPost.date}</span>
                    <div className="flex items-center gap-4">
                      <span>❤️ {selectedPost.likes} likes</span>
                      <span>💬 {selectedPost.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}