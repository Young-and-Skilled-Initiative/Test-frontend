import React from 'react';
import BlogCard from './BlogCard';
import { blogCards } from '@/data'; // Assuming you import blogCards from your data file

interface BlogCardListProps {
  limit?: number;
}

const BlogCardList: React.FC<BlogCardListProps> = ({ limit }) => {
  // Apply slicing if the limit prop is provided, otherwise display all cards
  const displayedCards = limit ? blogCards.slice(0, limit) : blogCards;

  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-x-4 md:gap-y-12">
      {displayedCards.map((card, index) => (
        <BlogCard
          key={index}
          category={card.category}
          title={card.title}
          date={card.date}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default BlogCardList;
