import { BookOpen, Clock, Calendar, ArrowRight, User, X } from "lucide-react";
import React, { useState } from "react";
import { BlogPost } from "../types";

interface BlogCardProps {
  post: BlogPost;
  key?: React.Key;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isReading, setIsReading] = useState(false);

  return (
    <>
      <article
        id={`blog-card-${post.id}`}
        className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-xs hover:shadow-md transition-all duration-300 hover:border-amber-200/80"
      >
        {post.image && (
          <div className="h-48 w-full overflow-hidden relative cursor-pointer group/img" onClick={() => setIsReading(true)}>
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 p-6">
          {/* Meta Header */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-stone-500 mb-3">
            <span className="rounded-full bg-stone-100 text-stone-700 px-2.5 py-0.5 border border-stone-150 uppercase tracking-wider font-semibold">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 leading-snug hover:text-amber-800 transition-colors">
            {post.title}
          </h3>

          {/* Short Summary */}
          <p className="font-sans text-sm text-stone-600 leading-relaxed mb-4 flex-1">
            {post.summary}
          </p>

          {/* Footer info & Read more action */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-150 mt-auto">
            <span className="text-[11px] text-[#9C826A] font-semibold">{post.author}</span>
            <button
              id={`read-article-btn-${post.id}`}
              onClick={() => setIsReading(true)}
              className="group flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-950 cursor-pointer"
            >
              <span>Read Article</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </article>

      {/* READING DRAWER / MODAL EXPANDER */}
      {isReading && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            id={`reading-drawer-${post.id}`}
            className="h-full w-full max-w-xl bg-[#FAF9F6] p-8 shadow-2xl overflow-y-auto flex flex-col justify-between transition-transform duration-300 animate-slide-in"
          >
            {/* Top Close bar */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9C826A]">
                Cosmetic Product Journal
              </span>
              <button
                id={`close-reading-btn-${post.id}`}
                onClick={() => setIsReading(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer transition-colors"
                aria-label="Close reading view"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Main Text Content */}
            <div className="flex-1">
              {post.image && (
                <div className="w-full h-56 rounded-xl overflow-hidden mb-6 border border-stone-200 shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <span className="text-xs bg-amber-100 border border-amber-200 text-amber-900 font-semibold uppercase tracking-widest px-3 py-1 rounded-sm">
                {post.category}
              </span>

              <h2 className="font-serif text-3xl font-bold text-stone-900 mt-4 mb-3 leading-tight">
                {post.title}
              </h2>

              {/* Author / Date Info */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-500 pb-5 mb-6 border-b border-stone-200">
                <span className="flex items-center">
                  <User className="mr-1 h-3.5 w-3.5 text-stone-400" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="mr-1 h-3.5 w-3.5 text-stone-400" />
                  {post.date}
                </span>
                <span className="flex items-center font-semibold">
                  <Clock className="mr-1 h-3.5 w-3.5 text-stone-400" />
                  {post.readTime}
                </span>
              </div>

              {/* Formatted body paragraph blocks */}
              <div className="font-sans text-sm md:text-base text-stone-700 leading-relaxed space-y-4 whitespace-pre-wrap">
                {post.content.split("\n\n").map((para, idx) => {
                  if (para.startsWith("### ")) {
                    return (
                      <h4 key={idx} className="font-serif text-lg font-bold text-stone-900 pt-2 mb-1">
                        {para.replace("### ", "")}
                      </h4>
                    );
                  }
                  if (para.match(/^\d+\.\s/)) {
                    return (
                      <div key={idx} className="pl-4 border-l-2 border-amber-600/40 py-1 bg-stone-50 rounded-r-lg">
                        <p className="italic font-medium text-stone-900 text-sm">{para}</p>
                      </div>
                    );
                  }
                  return <p key={idx}>{para}</p>;
                })}
              </div>
            </div>

            {/* Bottom finish */}
            <div className="mt-8 border-t border-stone-200 pt-6 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 italic">Thank you for reading the Cosmetic Journal.</span>
              <button
                id={`finish-reading-btn-${post.id}`}
                onClick={() => setIsReading(false)}
                className="rounded-full bg-stone-900 px-5  py-2 text-xs font-bold text-white uppercase hover:bg-stone-800 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
