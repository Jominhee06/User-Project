import React, { useState } from 'react';
import './News.css';

// 뉴스 데이터
const newsData = [
    { id: 1, title: '신곡 발매!', content: 'HYNN(박혜원), 신곡 오늘 노을이 예뻐서 발매 동시에 차트인', date: '2024-10-14', link: 'https://www.news1.kr/entertain/music/5567658', imageUrl: 'https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2024%2F10%2F14%2F6926959%2Fhigh.jpg&w=828&q=75', category: 'music', isFeatured: true },
    { id: 2, title: '라디오 출연!', content: '하현상, HYNN(박혜원)에 "보컬계 달인 같아" 극찬', date: '2024-11-06', link: 'https://www.news1.kr/entertain/broadcast-tv/5591097', imageUrl: 'https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2024%2F11%2F6%2F6968971%2Fhigh.jpg&w=828&q=75', category: 'broadcast', isFeatured: false },
    { id: 3, title: '단체 버스킹 ', content: '이예준부터 HYNN까지 많은 가수들이 나오는 더 리슨 가을밤 귀호강 책임진다', date: '2024-11-01', link: 'https://enews.imbc.com/News/RetrieveNewsInfo/435450', imageUrl: 'https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202411/01/iMBC/20241101080057898dzdw.jpg', category: 'event', isFeatured: false },
    { id: 4, title: '문화', content: '한강 소설 제목서 예명 딴 가수 HYNN "자랑스러운 이름 됐다', date: '2024-10-19', link: 'https://www.yna.co.kr/view/AKR20241019022800005', imageUrl: 'https://img7.yna.co.kr/etc/inner/KR/2024/10/19/AKR20241019022800005_01_i_P4.jpg', category: 'music', isFeatured: false },
    { id: 5, title: '방송/연예', content: '가수 HYNN, 예명에 숨겨진 이야기와 신곡 비화 공개', date: '2024-10-19', link: 'https://www.specialtimes.co.kr/news/articleView.html?idxno=409907', imageUrl: 'https://cdn.specialtimes.co.kr/news/photo/202410/409907_410127_1822.png', category: 'broadcast', isFeatured: true },
    { id: 6, title: '가요', content: 'HYNN(박혜원), 여름 소품집 CD 발매 기념 팬사인회...데뷔 후 처음', date: '2024-08-23', link: 'https://www.mk.co.kr/news/musics/11100080', imageUrl: 'https://pimg.mk.co.kr/news/cms/202408/23/news-p.v1.20240823.4cf90fc7b9f74c638a40a6cc7f387b89_P1.jpg', category: 'broadcast', isFeatured: true },
    { id: 7, title: '뮤직', content: '‘더 리슨’ HYNN(박혜원), ‘美친 존재감 발휘’ 최강 보컬들과 버스킹 라이브', date: '2024-11-01', link: 'https://www.msn.com/ko-kr/news/other/%EB%8D%94-%EB%A6%AC%EC%8A%A8-hynn%EB%B0%95%ED%98%9C%EC%9B%90-%E7%BE%8E%EC%B9%9C-%EC%A1%B4%EC%9E%AC%EA%B0%90-%EB%B0%9C%ED%9C%98-%EC%B5%9C%EA%B0%95-%EB%B3%B4%EC%BB%AC%EB%93%A4%EA%B3%BC-%EB%B2%84%EC%8A%A4%ED%82%B9-%EB%9D%BC%EC%9D%B4%EB%B8%8C/ar-AA1sXped', imageUrl: 'https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202410/27/sportskhan/20241027000804222yopw.jpg', category: 'broadcast', isFeatured: true },
    ];

    function News() {
    const [expandedNews, setExpandedNews] = useState(null);
    const [readNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const toggleExpand = (id) => {
        setExpandedNews(expandedNews === id ? null : id);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);  // Reset to page 1 when search changes
    };

    const filteredNews = newsData.filter((news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const currentNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const getEmoji = (category) => {
        switch (category) {
        case 'music':
            return '🎶';
        case 'broadcast':
            return '📺';
        case 'event':
            return '🎉';
        default:
            return '📰';
        }
    };

    return (
        <div className="news-container">
        <h2>Recent News</h2>

        {/* 검색 기능 */}
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search News"
            className="search-bar"
        />

        <ul>
            {currentNews.map((news) => (
            <li key={news.id} className={`news-item ${readNews.includes(news.id) ? 'read' : 'unread'}`}>
                {news.isFeatured && <span className="featured-tag">핫 뉴스</span>}
                <div className="news-card">
                <img src={news.imageUrl} alt={news.title} className="news-image" />
                <div className="news-content">
                    <h3>
                    {getEmoji(news.category)}{' '}
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                        {news.title}
                    </a>
                    </h3>
                    <p className="news-date">{news.date}</p>
                    <p>
                    {expandedNews === news.id ? news.content : `${news.content.substring(0, 50)}...`}
                    </p>
                    <button className="button" onClick={() => toggleExpand(news.id)}>
                    {expandedNews === news.id ? '간략히 보기' : '더 보기'}
                    </button>
                </div>
                </div>
            </li>
            ))}
        </ul>

        {/* 페이지 네이션 */}
        <div className="pagination">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>&lt; 이전</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>다음 &gt;</button>
        </div>
        </div>
    );
}

export default News;




