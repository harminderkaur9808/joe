import React from 'react';
import '../styles/Searchpage.css';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, totalPages }) => {
  // Calculate which pages to show
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxPagesToShow = 5; // Number of pages to show in the middle

    if (totalPages <= maxPagesToShow) {
      // If total pages are less than or equal to maxPagesToShow, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page
      pageNumbers.push(1);

      // Show ellipsis if currentPage is far from start
      if (currentPage > 3) {
        pageNumbers.push('...');
      }

      // Show pages around currentPage
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);

      if (currentPage <= 3) {
        endPage = Math.min(maxPagesToShow - 1, totalPages - 1);
      }
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - maxPagesToShow + 2, 2);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Show ellipsis if currentPage is far from end
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }

      // Show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination-controls">
      {pageNumbers.map((number, index) => (
        <React.Fragment key={index}>
          {typeof number === 'string' ? (
            <span>...</span>
          ) : (
            <button
              className={currentPage === number ? 'active' : ''}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Page X of Y display */}
      <div>
        <span className='buttontotal01-main'>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
