import Header from '@components/shared/baseShared/Header/Header';
import { 
    BannerSection,
    CategorieSection,
    DealsSection,
    FeaturedBookSection,
    NewBooksSection,
    SubscribeSection, 
    LatestArticleSection,
} from '@components/index';
import './Home.scss';

const Home = () => {

    return (
        <>
            <Header />
            <BannerSection />
            <CategorieSection />
            <NewBooksSection />
            <FeaturedBookSection />
            <DealsSection />
            <SubscribeSection />
            <LatestArticleSection />
        </>
    );
}

export default Home;
